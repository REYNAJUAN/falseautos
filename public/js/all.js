
// Make a get request to our api route that will return every vehicle
$.get("/api/all", function(data) {
    // For each vehicle that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("vehicle-item");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "vehicle-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);

      // Create a div for rows
      var rowSection = $("<div>");
      // Add a class of row to the div
      rowSection.addClass("row");
      // Append to vehicle-item
      wellSection.append(rowSection);

      // Create column for image
      var columnImage = $("<div>");
      // Add classes
      columnImage.addClass("col-sm-4 image-column");
      // Append to row
      rowSection.append(columnImage);

      // Create anchor tag for image
      var imageAnchor = $("<a>");
      imageAnchor.addClass("image-anchor");
      imageAnchor.attr("href", "vehicle.html");
      // Append to column
      $(".image-column").append(imageAnchor);

      // Create image
      var vehicleImage = $("<img>");
      vehicleImage.addClass("img-responsive profile-photo");
      vehicleImage.attr("src", "images/2015-camry/2015-camry-se-01.jpg");
      vehicleImage.attr("alt", data[i].year + data[i].make + data[i].model + data[i].trim);
      imageAnchor.append(vehicleImage);
  
      // Now we add our vehicle data to the well we just placed on the page
      $("#vehicle-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");





      $("#vehicle-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].mileage + "</h2>");
      $("#vehicle-well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
      $("#vehicle-well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
      $("#vehicle-well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
    }
  });
  