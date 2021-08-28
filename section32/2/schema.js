const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Comment {
        id: Int
        avatar: String
        name: String
        isTop: Boolean
        content: String
        publishDate: String
        commentNum: Int
        praiseNum: Int
    }
    type Query {
        comment: [Comment]
    }
`)

schema.getQueryType().getFields().comment.resolve = () => {
    return [{
        id: 1,
        avatar: "https://static001.geekbang.org/account/avatar/00/0f/52/62/1b3ebed5.jpg",
        name: "僵尸浩",
        isTop: true,
        content: "哈哈哈哈",
        publishDate: "今天",
        commentNum: 10,
        praiseNum: 5
    }]
}

module.exports = schema;