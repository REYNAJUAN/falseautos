// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Auto = sequelize.define("auto", {
  make: {
    type: Sequelize.STRING
  },
  model: {
    type: Sequelize.STRING
  },
  trim: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  exteriorColor: {
    type: Sequelize.STRING
  },
  mileage: {
    type: Sequelize.INTEGER
  },
  interior: {
    type: Sequelize.STRING
  },
  engine: {
    type: Sequelize.STRING
  },
  transmission: {
    type: Sequelize.STRING
  },
  drivetrain: {
    type: Sequelize.STRING
  },
  vin: {
    type: Sequelize.STRING
  },
  warranty: {
    type: Sequelize.STRING
  },
  vehicleOverview: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  // images: {
  //   type: Sequelize.BLOB
  // }
}, {
  timestamps: false
});

// Syncs with DB
Auto.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Auto;
