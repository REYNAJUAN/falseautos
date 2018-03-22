// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newVehicleInventory obj.
    var newVehicleInventory = {
      // make from make input
      make: $("#make").val().trim(),
      // model from model input
      model: $("#model").val().trim(),
      // year from year input
      year: $("#year").val().trim(),
      // color from color input
      color: $("#color").val().trim(),
      // color from color input
      mileage: $("#mileage").val().trim(),
      // color from color input
      interior: $("#interior").val().trim(),
      // color from color input
      trim: $("#trim").val().trim(),
      // color from color input
      fuel: $("#fuel").val().trim(),
      // color from color input
      vin: $("#vin").val().trim(),
      // color from color input
      warranty: $("#warranty").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newVehicleInventory)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding vehicle...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#make").val("");
    $("#model").val("");
    $("#year").val("");
    $("#color").val("");
    $("#mileage").val("");
    $("#interior").val("");
    $("#trim").val("");
    $("#engine").val("");
    $("#fuel").val("");
    $("#vin").val("");
    $("#warranty").val("");
  
  });
  