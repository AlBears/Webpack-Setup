var express = require('express')
var app = express();
var path = require('path');

app.use(express.static('../webpack'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
