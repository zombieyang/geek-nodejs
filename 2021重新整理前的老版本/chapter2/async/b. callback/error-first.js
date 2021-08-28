/**
 * try catch只能抓到一个调用堆栈内，即一个事件循环里的错误
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