var compress = require('compression');
var express = require('express');
var app = express();

app.use(compress());
app.use(express.static(__dirname + '/dist'));

app.all('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);
