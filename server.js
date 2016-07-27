var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Welcome To Express');
});

var server = app.listen(3000, function () {
  console.log("Example app listening at http://localhost:3000");
})
