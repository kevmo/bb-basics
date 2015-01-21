var express = require('express');


var app = express();

app.get('/', function (req, res){
  res.send('HARO');
});

var server = app.listen(3000, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log("This ya boy express js and I'm listening at port 3000!");
});
