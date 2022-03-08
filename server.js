
var express = require('express');

var app = express();

var server = app.listen(process.env.PORT || 80, listen);

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

var io = require('socket.io')(server);



// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {
    
    
    console.log("We have a new client: " + socket.id);
    
    
    socket.on('disconnect', function() {
      
      console.log("Client has disconnected");
      
      
      
      
    });
    
  }
  
);



  
 
