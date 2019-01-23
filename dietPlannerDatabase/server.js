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

app.get('/products/:id', function (req, res) {
  fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
   data = JSON.parse(data);
    data =data.find(product => product.id == req.params.id);
    console.log(data);
    res.send(data);
  });
});

app.post('/addProduct', function (req, res) {
   fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      newProduct ={"id": data.length > 0 ? data[data.length-1].id+1 : 1,
    "name":req.body.name,
    "quantity":100,
    "type": req.body.type,
	"nutritions":{
		"energy":req.body.energy,
		"protein":req.body.protein,
		"carbs": req.body.carbs,
		"fat": req.body.fat

	}}
      data.push(newProduct);
      fs.writeFile( __dirname + "/" + "products.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(newProduct);
   });
})

app.delete('/products/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      const index = findWithAttr(data, "id", req.params.id)
      data.splice(index,1);
      
      fs.writeFile( __dirname + "/" + "products.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(data);
   });
})

app.put('/edit/:id', function(req, res) {
  let idx = req.params.id;
  console.log(req.body);
  fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    const index = findWithAttr(data, "id", idx)
    newProduct ={"id": idx,
    "name":req.body.name,
    "quantity":100,
    "type": req.body.type,
	  "nutritions":{
		  "energy":req.body.energy,
		  "protein":req.body.protein,
		  "carbs": req.body.carbs,
		  "fat": req.body.fat
	  }}
    data.splice(index,1,newProduct);
    fs.writeFile( __dirname + "/" + "products.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(data);
  });
})

function findWithAttr(array, attr, value) {
  for(var i = 0; i < array.length; i += 1) {
    if(array[i][attr] == value) {
        return i;
    }
}
return -1;
}
// app.get('/meals', function(req, res) {
//   fs.readFile( __dirname + "/" + "meals.json", 'utf8', function (err, data) {
//     res.send( JSON.parse( data ) );
//   });
// });

// app.post('/meals/add', function(req, res) {
//   fs.readFile( __dirname + "/" + "meals.json", 'utf8', function (err, data) {
//     let meal = JSON.parse( data );
//     newMeal = {"id": (data[data.length-1].id)+1, "name" : req.body.mealName,"products" : req.body.products}
//     data.push(newMeal);
//     fs.writeFile( __dirname + "/" + "meals.json", JSON.stringify(data), function(err) {
//       if(err) throw err;
//       console.log('Data updated');
//     });
//     res.send(newProduct);
//   });
// })