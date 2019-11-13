var fs = require('fs');
var protocolBuffers = require('protocol-buffers');

var Schema = protocolBuffers(fs.readFileSync('./user.proto'));

module.exports = {
  init: function() {
  },
  encode: function(obj) {
    return Schema.Data.encode(obj);
  },
  decode: function(data) {
    return Schema.Data.decode(data);
  },
};
