/**
 * graphql协议
 */
const { buildSchema } = require('graphql');
const fs = require('fs');

/**
 * 使用 buildSchema 方法，把一个文本格式的 graphql 协议转换成 GraphqlSchema 实例
 * 很像 protocol-buffers 编译.proto文件的过程
 */
const schema = buildSchema(fs.readFileSync(__dirname + '/schema/comment.gql', 'utf-8'));

/**
 * 一个后台服务（可以理解为微服务）使用一个端口，所以对应前端也需要一个服务一个rpcclient
 */
const commentClient = require('./rpc-client/comment-client');
const praiseClient = require('./rpc-client/praise-client');

/**
 * 定义这个 graphql 协议获取数据的过程
 * 
 * 在视频课程中，这里用的是同步获取的假数据。
 * 现在这里换成 RPC调用 换回来的数据了
 */
schema.getQueryType().getFields().comment.resolve = () => {
    return new Promise((resolve, reject) => {
        commentClient.write({
            columnid: 0
        }, function (err, res) {
            err ? reject(err) : resolve(res.comments)
        })
    })
}
schema.getMutationType().getFields().praise.resolve = (args0, { id }) => {
    return new Promise((resolve, reject) => {
        praiseClient.write({
            commentid: id
        }, function (err, res) {
            err ? reject(err) : resolve(res.praiseNum)
        })
    })
}

module.exports = schema