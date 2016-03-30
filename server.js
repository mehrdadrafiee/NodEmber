const http = require('http');
const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Server is listening ot http://%s:%s", host, port);
});



// http.createServer( (request, response) => {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// }).listen(3000);
//
// console.log('server is listening on port 3000');
