var protobufjs = require('protobufjs');

var builder = protobufjs.loadProtoFile('./user.proto');
var User = builder.build('Data');

module.exports = {
  init: function() {
  },
  encode: function(obj) {
    var user = new User();
    for (var k in obj) {
      user[k] = obj[k];
    }
    return user.encode().toBuffer();
  },
  decode: function(data) {
    return User.decode(data);
  },
};

