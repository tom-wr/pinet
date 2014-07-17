var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* GET home page. */
app.get('/', function(req, res) {
  res.send('The great eye is open...');
});

io.on('connection', function(socket){
	console.log('PIbot docking');
})

http.listen(process.env.PORT || 5000, function(){
	console.log('piNET is awake and listening on port %d', http.address().port);
});