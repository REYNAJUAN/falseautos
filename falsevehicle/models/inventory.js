//This file holds information that will be posted when a user searches for a car.

//this on click event was added to hold the space. Button id will be replaced by the id in HTML once commited.
$("#add-btn").on("click", function(event) {
    event.preventDefault();

    ///Cars object will hold data to be posted on html after users serches a car. 
    var newCar = {
      make: $("#make").val().trim(),
      model: $("#model").val().trim(),
      year: $("#year").val().trim(),
      trim: $("#trim").val().trim(),
      mileage: $("mileage").val().trim(),
      engine:$("engine").val().trim(),
      transmission: $("transmission").val().trim(),
      drivetrain: $("drivetrain").val().trim(),
      color: $("color").val().trim(),
      interior: $("interior").val().trim(),
      vin: $("vin").val().trim(),
      warranty: $("warranty").val().trim(),
      images: $("images").val().trim(),

    };

    //  API path  is needed to fill below "---" space. this will come from Mysql /database.
    $.post("----", newCar)
    .then(function(data) {
      console.log(data);
      alert("Adding New Cars ");
    });
  });