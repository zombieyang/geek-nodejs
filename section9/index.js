console.log('start require');
var lib = require('./lib')

console.log('end require', lib);

// 参见lib.js注释里的知识点1
console.log(lib.tencent);

// 参见lib.js注释里的知识点2
// require返回的对象，和lib.js里的exports对象属于同一个引用
// 因此此处加的属性能在里面体现出来。
lib.additional = 'test'