const koa = require('koa');
const fs = require('fs');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();

// 使用static中间件提供静态文件服务
// 以source/static目录为基准目录，所有访问该服务器并且路径是/static的请求都会在这个目录下找到静态文件
// 并返回回去
app.use(
    mount('/static', static(__dirname + '/source/static/'))
);

// 根目录直接读出静态文件页面返回。
// 其实这个用static中间件也是能实现的。
app.use(
    mount('/', async (ctx) => {
        ctx.body = fs.readFileSync(__dirname + '/source/index.htm', 'utf-8')
    })
);


// app.listen(4000);
module.exports = app;