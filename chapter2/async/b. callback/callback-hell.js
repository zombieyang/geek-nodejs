/**
 * 在异步串行任务的情况下代码会变得非常的层层叠叠
 */

interview(function (err, res) {
    if (err) {
        console.log('cry at 1')
        return;
    }
    interview(function (err, res) {
        if (err) {
            console.log('cry at 2')
            return;
        }
        interview(function (err, res) {
            if (err) {
                console.log('cry at 3')
                return;
            }
            console.log('smile')
        })
    })
})



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