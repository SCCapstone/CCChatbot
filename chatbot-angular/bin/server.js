var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log("A user connected");
    socket.emit('test event', 'test data');
});

server.listen(1000, () => {
    console.log("Socket.io server is listening on port 1000");
});