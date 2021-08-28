const fs = require('fs')
const protobuf = require('protocol-buffers');
const commentSchemas = protobuf(
    fs.readFileSync(`${__dirname}/../proto/comment.proto`)
);

// 假数据
const commentData = require('./mockdata/comment');

/**
 * 服务端的编解包逻辑
 */
const server = require('./lib/geeknode-rpc-server')(commentSchemas.PraiseRequest, commentSchemas.PraiseResponse);

server
    .createServer((request, response) => {
        const commentid = request.body.commentid;
        const comment = commentData.filter(comment => comment.id == commentid)[0];
        let praiseNum = 0;

        if (comment) {
            comment.praiseNum++;
            praiseNum = comment.praiseNum;
        }
        response.end({
            commentid,
            praiseNum
        });
    })
    .listen(4002, ()=> {
        console.log('praise rpc server listened: 4002')
    });