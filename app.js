var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var wss =  require()

/* GET home page. */
app.get('/', function(req, res) {
  res.send('The great eye is open...');
});

io.on('connection', function(socket){
	console.log('Client connected');
	io.emit('order', {led:'on'});
	setTimeout(function(){
		io.emit('order', {led:'off'});
	}, 5000)
});

io.on('dock', function(data){
	console.log('piBot '+ data.name + 'is online.');
})

http.listen(process.env.PORT || 5000, function(){
	console.log('piNET is awake and listening on port %d', http.address().port);
});