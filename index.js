var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.json('André Braga - API');
});

var port = process.env.PORT || 1337;
app.listen(port);