const fs = require('fs');
const vm = require('vm');
const path = require('path')

const templateContext = vm.createContext({});
// const renderList = createTemplate(__dirname + '/index.htm')

function createTemplate(templatePath) {
    return vm.runInContext(
        `(function render(template) {
            return function (data) {
                with (data) {
                    return \`${fs.readFileSync(templatePath, 'utf-8')}\`
                }
            }
        })`,
        templateContext
    )(function (relativePath, data) {
        return createTemplate(path.dirname(templatePath) + '/' + relativePath)(data);
    });
}

module.exports = createTemplate
// console.log(renderList({ courses: listData }));