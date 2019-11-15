const fs = require('fs');
const app = new (require('koa'));
const mount = require('koa-mount');
const static = require('koa-static');
const graphqlHTTP = require('koa-graphql');
const getArticles = require('./data/article');
const detailClient = require('./data/detail-client');

app.use(
    // 给koa-graphql传一个graphql的协议文件，就会自动帮你生成graphql-api
    mount('/api', graphqlHTTP({
        schema: require('./schema')
    }))

)

app.use(
    mount('/static', static(`${__dirname}/source/static`))
)

const template = require('./template');
const playPageTemplate = template(`${__dirname}/template/index.html`);

app.use(
    mount('/', async (ctx) => {
        ctx.status = 200;

        const listResult = await getArticles();
        const detailResult = await new Promise((resolve, reject) => {
            detailClient.write({
                columnid: 1
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })

        ctx.body = playPageTemplate({
            articleList: JSON.parse(listResult.body).data.list,
            column: detailResult.column,
            itemTemplatePath: __dirname + '/template/item.tpl'
        })
    })
)

module.exports = app;