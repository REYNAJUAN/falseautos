// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


app.set('view engine', 'hbs'); // <-- This won't require the package. 
app.set('view options', { layout: 'layouts/main' });


// Load Routes
// =============================================================
var view_routes = require('./routes/view_routes'); // <-- See 'routes/views'
var html_routes = require('./routes/html-routes'); // <-- See 'routes/views'

// Static directory to be served
app.use('/', view_routes);

// Load Routes
// Starts the server to begin listening
// localhost:5000
// =============================================================
app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
