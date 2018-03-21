var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//  use Express 
// =============================================================
var app = express();
var PORT = 8000;///need to add our own port or server

// Sets up the Express 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// =============================================================
var cars = [
  {
    make: "Land Rover",
    model: "LS",
    year: 2016,
    trim: "XLE",
    mileage: "200",
    engine:"3.0 L V6",
    transmission: "authomatic",
    drivetrain: "unknow",
    color: "black",



// Basic routes. still need to define file location and paths to follow
app:get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
}),

app:get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "inventory.html"));
}),

// Get all cars
app:get("/all", function(req, res) {
  res.json(characters);
}),

// Search for specific car
app:get("/api/:cars?", function(req, res) {
  var chosen = req.params.cars;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < cars.length; i++) {
      if (chosen === cars[i].routeName) {
        return res.json(cars[i]);
      }
    }
    return res.json(false);
  }
  return res.json(cars);
}),

///new car
app:post("/api/new", function(req, res) {
  var newCar = req.body;

  
  console.log(newCar);

  cars.push(newCar);

  res.json(newCar);
}),

// this will have the server to begin listening
app:listen(PORT, function() {
  console.log("App listening to team's PORT " + PORT);
})}]