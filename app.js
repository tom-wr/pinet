var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* GET home page. */
app.get('/pibot', function(req, res) {
  res.sendfile('');
});

io.on('connection', function(socket){
	console.log('PIbot docking');
})

http.listen(3000, function(){
	console.log('piNET is awake and listening on port %d', http.address().port);
});