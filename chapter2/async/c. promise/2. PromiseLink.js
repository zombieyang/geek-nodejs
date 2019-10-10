/**
 * promise的状态转换以及通过then获取内容
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject(new Error(4))
    }, 500)
})

promise
    // .then(function (result) {
    //     console.log(result)
    // })
    .catch(function (err) {
        return 1
    })


setTimeout(() => {
    console.log(promise);
}, 800)