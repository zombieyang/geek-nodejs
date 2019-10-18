const fs = require('fs');
const protobuf = require('protocol-buffers');

// 根据协议，编译出一个js逻辑对象，里面包含encode和decode函数
// 实际写web服务器的时候，注意这个操作可以直接在进程启动就做
// 否则在http处理过程里做的话，是一次不必要的性能消耗
const schemas = protobuf(fs.readFileSync(`${__dirname}/test.proto`));

const buffer = 
schemas.Course.encode({
    id: 4,
    name: 'hh',
    lesson: []
})
console.log(
    buffer
);
console.log(
    schemas.Course.decode(buffer)
);