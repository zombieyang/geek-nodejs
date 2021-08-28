console.log('this is module');

exports.geekbang = { 'hello': 'haha' }

exports.tencent = function () {
    console.log('good')
}

// 知识点1：对module.exports赋值，exports对象就不再是外面require所得到的结果了。
// 我在视频里采用的说法是“覆盖exports”其实不算非常严谨。
// 因为exports变量本身还是存在的
module.exports = function () {
    console.log('hello geekbang');
}

// 知识点2：外部拿到require调用的结果和这里的exports对象是同一个引用
setTimeout(()=> {
    // 验证index.js里加的additional属性是否生效
    // 用于确定外部require到的对象和此处的exports是否是同一个属性
    console.log(exports)
}, 2000)


// 视频中我建议大家使用webpack命令辅助理解commonjs
// 但目前2021年最新版本的webpack已经不能直接使用我在视频里提到的命令了
// 但大家可以改用webpack --devtool=inline-source-map --mode=development --target=node ./index.js