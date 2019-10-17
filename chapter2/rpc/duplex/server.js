const net = require('net');

const server = net.createServer((socket) => {

    let oldBuffer = null;
    socket.on('data', function (buffer) {
        if (oldBuffer) {
            buffer = Buffer.concat([oldBuffer, buffer]);
        }
        let completeLength = 0;

        while (completeLength = checkComplete(buffer)) {
            const package = buffer.slice(0, completeLength);
            buffer = buffer.slice(completeLength);

            const result = decode(package);

            socket.write(encode(LESSON_DATA[result.data], result.seq));
        }

        oldBuffer = buffer;
    })

});

server.listen(4000);

/** 
 * 
*/
function encode(data, seq) {
    const body = Buffer.from(data)

    const header = Buffer.alloc(6);
    header.writeInt16BE(seq)
    header.writeInt32BE(body.length, 2);

    const buffer = Buffer.concat([header, body])

    return buffer;
}

function decode(buffer) {
    const header = buffer.slice(0, 6);
    const seq = header.readInt16BE();

    const body = buffer.slice(6)

    return {
        seq,
        data: body.readInt32BE()
    }
}

function checkComplete(buffer) {
    if (buffer.length < 6) {
        return 0;
    }
    const bodyLength = buffer.readInt32BE(2);
    return 6 + bodyLength
}

const LESSON_DATA = {
    136797: "01 | 课程介绍",
    136798: "02 | 内容综述",
    136799: "03 | Node.js是什么？",
    136800: "04 | Node.js可以用来做什么？",
    136801: "05 | 课程实战项目介绍",
    136803: "06 | 什么是技术预研？",
    136804: "07 | Node.js开发环境安装",
    136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
    136807: "09 | 模块：CommonJS规范",
    136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
    136809: "11 | 模块：npm",
    141994: "12 | 模块：Node.js内置模块",
    143517: "13 | 异步：非阻塞I/O",
    143557: "14 | 异步：异步编程之callback",
    143564: "15 | 异步：事件循环",
    143644: "16 | 异步：异步编程之Promise",
    146470: "17 | 异步：异步编程之async/await",
    146569: "18 | HTTP：什么是HTTP服务器？",
    146582: "19 | HTTP：简单实现一个HTTP服务器"
}
