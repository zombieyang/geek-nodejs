const fs = require('fs')
const protobuf = require('protocol-buffers');
const schemas = protobuf(fs.readFileSync(`${__dirname}/../proto/list.proto`));
const RPC = require('../rpc-channel/server')

const listData = [{
    id: 1,
    introURL: 'https://time.geekbang.org/',
    pic: 'https://static001.geekbang.org/resource/image/ed/e0/ed2d0aa1e881ee055ba14f58c9603fe0.jpg',
    topic: 'Node.js入门',
    author: '僵尸浩',
    title: '腾讯扫地工程师',
    lessonNum: 55,
    subscriberNum: 1000,
    price: 100,
    discount: 99,
    lessons: [{
        playURL: 'https://time.geekbang.org/',
        id: 0,
        index: 1,
        isFree: false,
        title: '第一课'
    }]

}, {
    id: 2,
    introURL: 'https://time.geekbang.org/',
    pic: 'https://static001.geekbang.org/resource/image/ed/e0/ed2d0aa1e881ee055ba14f58c9603fe0.jpg',
    topic: 'Node.js提升',
    author: '僵尸浩',
    title: '腾讯高级扫地工程师',
    lessonNum: 55,
    subscriberNum: 1000,
    price: 100,
    discount: 99,
    lessons: [{
        playURL: 'https://time.geekbang.org/',
        id: 0,
        index: 1,
        isFree: false,
        title: '第二课'
    }]
}];

const server = new RPC({
    decodeRequest(buffer) {
        const seq = buffer.readUInt32BE();

        return {
            seq: seq,
            result: schemas.CourseListRequest.decode(buffer.slice(8))
        }
    },
    isCompleteRequest(buffer) {
        const bodyLength = buffer.readUInt32BE(4);

        return 8 + bodyLength
    },
    encodeResponse(data, seq) {
        const body = schemas.CourseListResponse.encode({
            sortType: 0,
            filterType: 0,
            page: 0,
            courses: data
        });

        const head = Buffer.alloc(8);
        head.writeUInt32BE(seq);
        head.writeUInt32BE(body.length, 4);

        return Buffer.concat([head, body]);
    }
})

server
    .createServer((request, response) => {
        // console.log('server', request);
        response.end(listData);
    })
    .listen(4000);