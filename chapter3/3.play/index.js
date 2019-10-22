const fs = require('fs');
const app = new (require('koa'));
const mount = require('koa-mount');
const static = require('koa-static');
const graphqlHTTP = require('koa-graphql');


app.use(
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

// app.listen(3000);

module.exports = app;