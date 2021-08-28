// 把抛事件的模块封装起来
// 强调抛事件这种模式更适合底层模块往外传递信息
const geektime = require('./geektime');

geektime.on('newlesson', ({ price }) => {
    console.log('yeah! new lesson')
    if (price < 80) {
        console.log('buy')
    }
})


setTimeout(() => {
    // 需要注意的是，EventEmitter如果添加了过多的监听器，Node.js觉得你有内存泄漏嫌疑，会抛出一个warning。
    // 用以下这句则可以消除这个限制
    // geektime.setMaxListeners(200);
    for (let i = 0; i < 100; i++) {
        geektime.on('newlesson', ({ price }) => {
        })
    }
}, 10000)