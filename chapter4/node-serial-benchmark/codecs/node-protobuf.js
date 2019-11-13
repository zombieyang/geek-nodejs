var protobuf = require('../modules/node-protobuf');

var Schema = new protobuf(require('fs').readFileSync('./user.desc'));

module.exports = {
    init: function() {
    },
    encode: function(obj) {
      return Schema.serialize(obj, "tk.tewi.Data");
    },
    decode: function(data) {
      return Schema.parse(data, "tk.tewi.Data");
    },
  };
  