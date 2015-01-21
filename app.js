var express = require('express');


var app = express();

app.get('/', function (req, res){
  res.send('HARO');
});

app.post('/', function(req, res){
  res.send('lol post lol');
});

app.put('/user', function(req, res){
  res.send('lol put lol');
});

app.delete('/', function(req,res){
  res.send('lol delete lol');
});

var server = app.listen(3000, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log("This ya boy express js and I'm listening at port 3000!");
});
