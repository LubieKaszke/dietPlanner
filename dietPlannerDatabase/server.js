const express = require('express');
const app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
const port = process.env.PORT || 8081;
var cors = require('cors')

app.use(cors());
app.use(bodyParser());

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

app.get('/products', function (req, res) {
  fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
    res.send( JSON.parse( data ) );
  });
});

app.get('/meals', function(req, res) {
  fs.readFile( __dirname + "/" + "meals.json", 'utf8', function (err, data) {
    res.send( JSON.parse( data ) );
  });
});