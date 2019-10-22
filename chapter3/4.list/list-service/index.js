const protobuf = require('protocol-buffers')
const fs = require('fs');
const schemas = protobuf(fs.readFileSync(`${__dirname}/proto/list.proto`));

const EasySock = require('easy_sock');
const easysock = new EasySock({
    ip: '127.0.0.1',
    port: 4000,
    keepAlive: true,
    timeout: 500
});

easysock.decode = function (buffer) {
    const seq = buffer.readUInt32BE();

    return {
        result: schemas.CourseListResponse.decode(buffer.slice(8)),
        seq
    };
}

easysock.encode = function (data, seq) {
    const body = schemas.CourseListRequest.encode(data);
    const head = Buffer.alloc(8);
    head.writeUInt32BE(seq);
    head.writeUInt32BE(body.length, 4);
    
    return Buffer.concat([head, body])
}

easysock.isReceiveComplete = function (buffer) {
    try {
        const bodyLength = buffer.readInt32BE(4);

        return 8 + bodyLength
    } catch (e) {
        return 0
    }
}

module.exports = easysock;
// easysock.write({
//     sortType: 0,
//     filterType: 0,
//     page: 0
// }, function (err, data) {
//     console.log(arguments)
// });