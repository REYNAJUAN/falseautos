module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define('note', { // <-- Describes the model. This acts like a schema.
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      year: DataTypes.INTEGER,
      color: DataTypes.STRING,
      mileage: DataTypes.INTEGER,
      interior: DataTypes.STRING,
      trim: DataTypes.STRING,
      engine: DataTypes.STRING,
      fuel: DataTypes.STRING,
      vin: DataTypes.STRING,
      warranty: DataTypes.STRING,
      created_at: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updated_at: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
    }, {
      timestamps: false
    }); 
  
    return Note; // <--hands it back to the index.js file because you have to return the model you created
  };

// Creates a "Chirp" model that matches up with DB
// var Cars_inventory = sequelize.define("cars_inventory", { // <-- converts this table name to plural.
//   make: {
//     type: Sequelize.STRING
//   },
//   model: {
//     type: Sequelize.STRING
//   },
//   year: {
//     type: Sequelize.INTEGER
//   },
//   color: {
//     type: Sequelize.STRING
//   },
//   mileage: {
//     type: Sequelize.INTERGER
//   },
//   interior: {
//     type: Sequelize.STRING
//   },
//   trim: {
//     type: Sequelize.STRING
//   },
//   engine: {
//     type: Sequelize.STRING
//   },
//   fuel: {
//     type: Sequelize.STRING
//   },
//   vin: {
//     type: Sequelize.STRING
//   },
//   warranty: {
//     type: Sequelize.STRING
//   },
//   created_at: {
//     type: Sequelize.DATE
//   }
// }, {
//   timestamps: true
// });

// // Syncs with DB
// cars_inventory.sync(); // <-- This is needed to sync to the DB or sequelize will not work.

// // Makes the Chirp Model available for other files (will also create a table)
// module.exports = cars_inventory;
