// The NoteController.js interacts with a model.
// Every model is attached to the model/index.js file now.
// The model is attached to an object now.
var Note = require('../models').note;

Note.create({
      make: 'Toyota',
      model: 'Supra',
      year: '1993',
      color: 'Pearl White',
      mileage: '30010',
      interior: 'Alpine White',
      trim: 'Turbo',
      engine: 'Inline-6',
      fuel: 'Gasoline',
      vin: 'JMP1484SJH4R35TE6',
      warranty: 'AS IS'
})

module.exports = { 
    getAll: function(callback) { // <-- This is a method called 'getAll' That uses a function. We can use a callback or a promise.
        Note.findAll().then(function(notes) { // <-- Find all notes using the models folder (see Note.js)
            callback(notes); // <-- callback function that is passed in those notes which is linked to the views/views.js
        });
    }
}
// Note.findAll().then(function(note) {
//     console.log(note);
// })