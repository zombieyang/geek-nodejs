const net = require('net');

const socket = new net.Socket({});

socket.connect({
    host: '127.0.0.1',
    port: 4000
})

socket.write('good morning geekbang');