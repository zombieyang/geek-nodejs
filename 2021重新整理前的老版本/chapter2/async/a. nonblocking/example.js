const glob = require('glob');

console.time('sync')
const result = glob.sync(__dirname + '/**/*')
console.timeEnd('sync')
console.log(result.length)



console.time('async')
const result2 = glob(__dirname + '/**/*', function (err, result) {
    console.log(result.length)
})
console.timeEnd('async')
// IO完成之前还可以做别的事
console.log('hello geekbang')





