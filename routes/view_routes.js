// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var router = require('express').Router();
var NoteController = require('../controllers/NoteController'); // <-- See 'controllers/NoteController'

router.get('/', function(req, res) { // <-- Routes are setup up to show our home page.
  NoteController.getAll(function(notes) { // <-- from the NoteController getAll
    res.render('index', {notes: notes}); // <-- uses the controller to get the notes from the database.
  });
});

// Routes
// =============================================================
module.exports = router;

//   // Get all chirps
//   app.get("/api/all", function(req, res) {

//     // Finding all Chirps, and then returning them to the user as JSON.
//     // Sequelize queries are asynchronous, which helps with perceived speed.
//     // If we want something to be guaranteed to happen after the query, we'll use
//     // the .then function
//     Chirp.findAll({}).then(function(results) {
//       // results are available to us inside the .then
//       res.json(results);
//     });

//   });

//   // Add a chirp
//   app.post("/api/new", function(req, res) {

//     console.log("Cars Inventory Data:");
//     console.log(req.body);

//     Chirp.create({
//       author: req.body.author,
//       body: req.body.body,
//       created_at: req.body.created_at
//     }).then(function(results) {
//       // `results` here would be the newly created chirp
//       res.end();
//     });

//   });

// };