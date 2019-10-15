/**
 * promise的状态转换以及通过then获取内容
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(3);
        // reject(new Error(4))
    }, 500)
})

promise
    .then(function (result) {
        console.log(result)
    })
// .catch(function (err) {

// })

setTimeout(() => {
    console.log(promise)
}, 800)