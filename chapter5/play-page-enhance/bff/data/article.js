const request = require('request');

module.exports = function () {

    return new Promise((resolve, reject) => {
        request('http://127.0.0.1:4003/', (err, data) => {
            err ? reject(err) : resolve(data);
        })
    })
}