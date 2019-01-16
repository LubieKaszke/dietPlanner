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

app.post('/meals/add', function(req, res) {
  fs.readFile( __dirname + "/" + "meals.json", 'utf8', function (err, data) {
    let meal = JSON.parse( data );
    newMeal = {"id": (data[data.length-1].id)+1, "name" : req.body.mealName,"products" : req.body.products}
    data.push(newMeal);
    fs.writeFile( __dirname + "/" + "meals.json", JSON.stringify(data), function(err) {
      if(err) throw err;
      console.log('Data updated');
    });
    res.send(newProduct);
  });
})