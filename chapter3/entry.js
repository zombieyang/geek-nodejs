const mount = require('koa-mount');
const koa = require('koa');

const app = new koa;

app.use(
    mount('/download', require('./1.download/index'))
)
app.use(
    mount('/detail', require('./2.detail/index'))
)
app.use(
    mount('/play', require('./3.play/index'))
)
app.use(
    mount('/list', require('./4.list/node/index'))
)

app.listen(3000, ()=> {
    console.log('listened 3000')
});