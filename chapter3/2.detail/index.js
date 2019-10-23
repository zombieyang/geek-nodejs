const mount = require('koa-mount');
const static = require('koa-static')
const app = new (require('koa'));
const rpcClient = require('./client');
const template = require('./template');

// 编译出一个模版函数
const detailTemplate = template(__dirname + '/template/index.html');

// 静态文件中间件，和下载页一样
app.use(mount('/static', static(`${__dirname}/source/static/`)))

app.use(async (ctx) => {
    // 如果用户没有传入columnid作为参数，则返回400
    if (!ctx.query.columnid) {
        ctx.status = 400;
        ctx.body = 'invalid columnid';
        return 
    }

    // 使用rpc调用获取数据
    const result = await new Promise((resolve, reject) => {

        rpcClient.write({
            columnid: ctx.query.columnid
        }, function (err, data) {
            err ? reject(err) : resolve(data)
        })
    })

    ctx.status = 200;
    
    // 把拿到的结果丢到模版里渲染成html并返回给浏览器
    ctx.body = detailTemplate(result);
})

// app.listen(3000)

module.exports = app;