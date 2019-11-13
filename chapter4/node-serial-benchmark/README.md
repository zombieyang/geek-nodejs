# node-serialization-benchmark

```
$ npm install
$ node index.js

-----------------------
json encode compress percent: 0%
json encode: 8.587ms
json decode: 10.409ms
-----------------------
pomelo-protobuf encode compress percent: 59%
pomelo-protobuf encode: 69.589ms
pomelo-protobuf decode: 23.570ms
-----------------------
protobufjs encode compress percent: 59%
protobufjs encode: 126.723ms
protobufjs decode: 44.024ms
-----------------------
protocol-buffers encode compress percent: 59%
protocol-buffers encode: 29.328ms
protocol-buffers decode: 7.892ms
-----------------------
pson encode compress percent: 34%
pson encode: 133.021ms
pson decode: 17.193ms
-----------------------
thrift-binary encode compress percent: 37%
thrift-binary encode: 78.781ms
thrift-binary decode: 17.564ms
-----------------------
thrift-compact-frame encode compress percent: 58%
thrift-compact-frame encode: 77.959ms
thrift-compact-frame decode: 37.352ms
-----------------------
thrift-compact encode compress percent: 58%
thrift-compact encode: 82.620ms
thrift-compact decode: 37.449ms
```
