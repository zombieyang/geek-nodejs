const fs = require('fs');
const vm = require('vm');

const templateCache = {};

// 模版运行的全局环境
const templateContext = vm.createContext({

    include: function (name, data) {
        // include一个子模版的时候，先判断有没有已经编译好的，如果没有，则编译。
        const template = templateCache[name] || compileTemplate(name)

        // 调用模版函数获得html
        return template(data);
    }
});

// 把模版字符串编译成模版函数
function compileTemplate(templatePath) {

    // 通过with，可以把数据展开来给模版使用，易用性更加好
    templateCache[templatePath] = vm.runInContext(
        `(function (data) {
            with (data) {
                return \`${fs.readFileSync(templatePath, 'utf-8')}\`
            }
        })`,
        templateContext
    );

    return templateCache[templatePath]
}

module.exports = compileTemplate