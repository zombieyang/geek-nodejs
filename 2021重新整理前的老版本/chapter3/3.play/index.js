const fs = require('fs');
const app = new (require('koa'));
const mount = require('koa-mount');
const static = require('koa-static');
const graphqlHTTP = require('koa-graphql');


app.use(
    // 给koa-graphql传一个graphql的协议文件，就会自动帮你生成graphql-api
    mount('/api', graphqlHTTP({
        schema: require('./schema')
    }))
    
)

app.use(
    mount('/static', static(`${__dirname}/source/static`))
)

app.use(
    mount('/', async (ctx) => {
        ctx.status = 200;

        ctx.body = fs.readFileSync(`${__dirname}/source/index.htm`, 'utf-8')
    })
)

module.exports = app;