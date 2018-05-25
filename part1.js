//Require Express.
const express = require("express");
//Start Express.
const app = express();
//Create startup variable.
var counter = 0;

//Set up Route to increment counter upon each access.
app.get('/', function(req, res)  {
  res.send("<h1>Hello world!</h1>");
});

app.get('/count', function(req, res){
  counter++;
  res.send("<h1>You have connected "+counter+ " times </h1>");
});

//Set up port to listen to.
app.listen(3000, () => console.log('Example app listening on port 3000!'));

// Run by typing 'node part1.js'
