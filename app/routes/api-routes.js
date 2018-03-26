// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Auto = require("../models/book.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all cars
  app.get("/api/inventory", function(req, res) {
    Auto.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific car
  app.get("/api/make", function(req, res) {
    if (req.params.auto) {
      Auto.findAll({
        where: {
          make: req.params.make,
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  // // Get a specific auto manufacturer make
  // app.get("/api/:make", function(req, res) {
  //   if (req.params.make) {
  //     Auto.findAll({
  //       where: [
  //         {
  //         make: req.params.make
  //         }]
          
         
  //     }).then(function(results) {
  //       console.log(results);
  //       res.json(results);
  //     });
  //   }
  // });



  // Add a book
  app.post("/api/new", function(req, res) {
    console.log("Auto Data:");
    console.log(req.body);
    Auto.create({
      make: req.body.make,
      model: req.body.model,
      trim: req.body.trim,
      year: req.body.year,
      mileage: req.body.mileage,
      engine: req.body.engine,
      transmission: req.body.transmission,
      drivetrain: req.body.drivetrain,
      exteriorColor: req.body.exteriorColor,
      interior: req.body.interior,
      vin: req.body.vin,
      warranty: req.body.warranty,
      price: req.body.price,
      vehicleOverview: req.body.vehicleOverview,

      
      // images: req.body.images,
    });
  });

  // Delete a vehicle
  app.post("/api/delete", function(req, res) {
    console.log("Auto Data:");
    console.log(req.body);
    Auto.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};
