const net = require('net');

const socket = new net.Socket({});

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

let oldBuffer = null;
socket.on('data', (buffer) => {
    if (oldBuffer) {
        buffer = Buffer.concat([oldBuffer, buffer]);
    }
    let completeLength = 0;

    while (completeLength = checkComplete(buffer)) {
        const package = buffer.slice(0, completeLength);
        buffer = buffer.slice(completeLength);

        const result = decode(package);
        console.log(`包${result.seq}，返回值是${result.data}`);
    }

    oldBuffer = buffer;
})


let seq = 0;
/** 
 * 
*/
function encode(data) {
    const body = Buffer.alloc(4);
    body.writeInt32BE(lessonids[data.id]);

    const header = Buffer.alloc(6);
    header.writeInt16BE(seq)
    header.writeInt32BE(body.length, 2);

    const buffer = Buffer.concat([header, body])

    console.log(`包${seq}传输的课程id为${lessonids[data.id]}`);
    seq++;
    return buffer;
}

function decode(buffer) {
    const header = buffer.slice(0, 6);
    const seq = header.readInt16BE();

    const body = buffer.slice(6)

    return {
        seq,
        data: body.toString()
    }
}

function checkComplete(buffer) {
    if (buffer.length < 6) {
        return 0;
    }
    const bodyLength = buffer.readInt32BE(2);
    return 6 + bodyLength
}


for (let k = 0; k < 100; k++) {
    id = Math.floor(Math.random() * lessonids.length);
    socket.write(encode({ id }));
}