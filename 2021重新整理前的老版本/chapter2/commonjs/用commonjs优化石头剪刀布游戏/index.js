
const game = require('./game.js')

var winCount = 0;
// 获取进程的标准输入
process.stdin.on('data', (buffer) => {
    // 回调的是buffer，需要处理成string
    const action = buffer.toString().trim();
    const result = game(action);
    if (result == 1) { 
        winCount++ 
        if (winCount == 3) {
            console.log('我不玩儿了！哼！');
            process.exit()
        }
    }
})