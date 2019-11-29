const request = require('request');

let url = '';
module.exports = {
    compile: function (config) { url = config.url },
    request: async function (data) {

        return await new Promise((resolve, reject) => {
            request(url, (err, data) => {
                err ? reject(err) : resolve(data.body);
            })
        })
    }
}