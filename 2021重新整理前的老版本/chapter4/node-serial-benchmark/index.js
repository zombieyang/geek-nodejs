var fs = require('fs');
var path = require('path');

function load(dir) {
  var codecs = [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var basename = path.basename(files[i], '.js');
    var modname = dir + '/' + basename;
    codecs.push({
      name: basename,
      impl: require(modname)
    });
  }
  return codecs;
}

function main() {
  var codecs = load('./codecs');
  var n = 10000;
  var input = require('./input.json');
  var rawSize = JSON.stringify(input).length;
  var i;
  var j;

  for (i = 0; i < codecs.length; ++i) {
    var codec = codecs[i];
    var label = codec.name + ' encode';

    var encodedData = codec.impl.encode(input);
    var encodedSize = encodedData.length;

    var percent = Math.round((rawSize - encodedSize) / rawSize * 100);
    console.log(label + ' compress percent: ' + percent + '%');
    console.time(label);
    for (j = 0; j < n; ++j) {
      codec.impl.encode(input);
    }
    console.timeEnd(label);

    label = codec.name + ' decode';
    console.time(label, '\t\t\t');
    for (j = 0; j < n; ++j) {
      codec.impl.decode(encodedData);
    }
    console.timeEnd(label);

    console.log('-----------------------');
  }
}

main(process.argv);
