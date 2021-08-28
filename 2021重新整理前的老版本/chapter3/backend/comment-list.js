const fs = require('fs')
const protobuf = require('protocol-buffers');
const commentSchemas = protobuf(
    fs.readFileSync(`${__dirname}/../3.play/schema/comment.proto`)
);

// 假数据
const commentData = require('./mockdata/comment');

/**
 * 服务端的编解包逻辑
 */
const server = require('./lib/geeknode-rpc-server')(commentSchemas.CommentListRequest, commentSchemas.CommentListResponse);

server
    .createServer((request, response) => {
        response.end({ comments: commentData });
    })
    .listen(4001, ()=> {
        console.log('rpc server listened: 4001')
    });