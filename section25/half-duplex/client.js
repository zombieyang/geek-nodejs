const net = require('net');

// 创建socket
const socket = new net.Socket({});

// 连接服务器
socket.connect({
    host: '127.0.0.1',
    port: 4000
});


const lessonids = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
]

let id = Math.floor(Math.random() * lessonids.length);

// 往服务器传数据
socket.write(encode(id));

socket.on('data', (buffer) => {
    console.log(buffer.toString())

    // 接收到数据之后，按照半双工通信的逻辑，马上开始下一次请求
    id = Math.floor(Math.random() * lessonids.length);
    socket.write(encode(id));
})

// 把编码请求包的逻辑封装为一个函数
function encode(index) {
    buffer = Buffer.alloc(4);
    buffer.writeInt32BE(
        lessonids[index]
    );
    return buffer;
}