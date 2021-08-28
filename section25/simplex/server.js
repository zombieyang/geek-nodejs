const net = require('net');

const server = net.createServer((socket)=> {
    socket.on('data', function(buffer) {
        console.log(buffer, buffer.toString())
    })
});

server.listen(4000);