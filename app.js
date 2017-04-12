var express = require('express');
var app = express();
var server = require('http').createServer(app); //Express initalizes app
var io = require('socket.io').listen(server);

var users = [];
var connections = [];

app.set('view engine', 'ejs'); // Render all html via ejs
app.use('/public', express.static('./public'));

/*   route    */
app.get('/', function(req, res){
    res.render('index'); // homepage
});

io.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
    socket.on('disconnect', function(data){

        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    socket.on('send message', function(data){
        io.sockets.emit('new message', {msg: data, user: socket.username});
    });

    socket.on('new user', function(data, callback){
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames(){
        io.sockets.emit('get users', users);
    }
});


// server setup
server.listen(process.env.port || 3000) // listen to port 3000
    console.log('server is running on port 3000');
