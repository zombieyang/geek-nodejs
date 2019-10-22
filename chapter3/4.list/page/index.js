const app = new (require('koa'));
const mount = require('koa-mount');
const static = require('koa-static');
const ReactDOMServer = require('react-dom/server');
require('babel-register')({
    presets: ['react']
});
const ReactRoot = require('./reactapp.jsx')
const template = require('./template')(__dirname + '/index.htm')

app.use(mount('/static', static(__dirname + '/source')))

app.use(async (ctx) => {
    ctx.status = 200;
    // console.log(ReactDOMServer.renderToString(ReactRoot)); 
    ctx.body = template({
        reactString: ReactDOMServer.renderToString(ReactRoot) 
    })
})
   
// app.listen(3000)

module.exports = app;