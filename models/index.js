///this file holds user request to get data from database.
var  stats=require ('stats');
console.log(stats.parse(str))



    $("#search-btn").on("click", function() {
      var searchedCar = $("#car-search").val().trim();

///API path is neede to enter in "--"pace. to indicate path.
      $.get("---" + searchedCar, function(data) {
        console.log(data);
        if (data) {
          $("#stats").show();
          $("#make").text(data.make);
          $("#model").text(data.model);
          $("#year").integer(data.year);
          $("#trim").text(data.trim);
          $("#mileage").text(data.mileage);
          $("#engine").text(data.engine);
          $("#transmission").text(data.transmission);
          $("#drivetrain").text(data.drivetrain);
          $("#color").text(data.color);
          $("#interior").text(data.interior);
          $("#vin").text(data.vin);
          $("#warranty").text(data.warranty);
          $("#images").text(data.images);
        }

        else {
          $("#make").text("Car was not found.");
          $("#stats").hide();
        }
      });
    });
