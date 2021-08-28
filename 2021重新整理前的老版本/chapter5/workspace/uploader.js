const fs = require('fs');
const mkdirp = require('mkdirp');
const webpack = require('webpack');
const mfs = new (require('memory-fs'));

module.exports = function (
    businessName,
    dataJSPath,
    templatePath
) {
    mkdirp.sync(__dirname + '/../business/' + businessName);

    fs
        .createReadStream(templatePath)
        .pipe(fs.createWriteStream(__dirname + '/../business/' + businessName + '/template.tpl'));

    const compileTask = webpack({
        mode: 'development',
        devtool: false,
        target: 'node',

        entry: dataJSPath,

        module: {
            rules: [
                { test: /.proto$/, use: 'text-loader' }
            ]
        },

        output: {
            path: "/whatever",
            filename: "data.js"
        }
    });

    compileTask.outputFileSystem = mfs;

    compileTask.run(function(err) {
        if (err) { return }
        const content = mfs.readFileSync('/whatever/data.js')
        fs.writeFileSync(__dirname + '/../business/' + businessName + '/data.js', content);
    })
}