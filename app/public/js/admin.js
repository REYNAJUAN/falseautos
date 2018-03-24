// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newAuto = {
    make: $("#make").val().trim(),
    model: $("#model").val().trim(),
    trim: $("#trim").val().trim(),
    year: $("#year").val().trim(),
    mileage: $("#mileage").val().trim(),
    engine: $("#engine").val().trim(),
    transmission: $("#transmission").val().trim(),
    drivetrain: $("#drivetrain").val().trim(),
    exteriorColor: $("#exteriorColor").val().trim(),
    interior: $("#interior").val().trim(),
    vin: $("#vin").val().trim(),
    warranty: $("#warranty").val().trim(),
    price: $("#price").val().trim(),
    
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newAuto)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#make").val("");
  $("#model").val("");
  $("#trim").val("");
  $("#year").val("");
  $("#mileage").val("");
  $("#engine").val("");
  $("#transmission").val("");
  $("#drivetrain").val("");
  $("#exteriorColor").val("");
  $("#interior").val("");
  $("#vin").val("");
  $("#warranty").val("");
  $("#price").val("");
  // $("#image").val("");
});


// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

});

// $file = $_FILES['images']['tmp_name'],
      
//       $images = addslashes(file_get_contents($_FILES('images')('tmp_name')));
//       $images_name = addslashes($_FILES['images']['name']);