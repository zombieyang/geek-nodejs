/**
 * 如同视频课程所说
 * try catch只能抓到一个调用堆栈内，即一个事件循环里的错误
 * 因此此处使用try catch是无效的。
 * 
 * error-first规范即是约定好如果该异步任务出错了
 * 错误会在第一个参数里回调出来。
 * 
 */
// try {
    interview(function (err, res) {
        if (err) {
            console.log('cry')
            return;
        }
        console.log('smile')
    })

// } catch (e) {
//     console.log('cry')
// }



function interview(callback) {
    
    setTimeout(() => {
        if (Math.random() > 0.2) {
            callback(null, 'success')

        } else {
            // throw new Error('fail');
            callback(new Error('fail'))
        }

    }, 500)
}