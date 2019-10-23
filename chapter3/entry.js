const mount = require('koa-mount');
const koa = require('koa');

const app = new koa;

// 下载页 koa app，使用 koa-mount 挂载
app.use(
    mount('/download', require('./1.download/index'))
)
// 详情页 koa app，使用 koa-mount 挂载
app.use(
    mount('/detail', require('./2.detail/index'))
)

// 下周更新
// app.use(
//     mount('/play', require('./3.play/index'))
// )
// app.use(
//     mount('/list', require('./4.list/page/index'))
// )

app.listen(3000, ()=> {
    console.log('listened 3000')
});