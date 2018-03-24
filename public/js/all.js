
// Make a get request to our api route that will return every vehicle
$.get("/api/inventory", function(data) {
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
      rowSection.attr("id", "row-section-" + i);
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
      vehicleImage.attr("src", "images/vehicle-" + (i + 1) + ".jpg");
      vehicleImage.attr("alt", data[i].year + " " + data[i].make + " " + data[i].model + " " + data[i].trim);
      imageAnchor.append(vehicleImage);

      // Create details wrapper
      var detailsWrapper = $("<div>");
      detailsWrapper.addClass("col-sm-8");
      detailsWrapper.attr("id", "details-wrapper-" + i)
      rowSection.append(detailsWrapper);
  
      // Now we add our vehicle data to the details column
      detailsWrapper.append("<h2 class='vehicle-title'>" + data[i].year + " "  + data[i].make + " " + data[i].model + " " + data[i].trim + " " + data[i].drivetrain + "</h2>");

      // Create new row
      var newRow = $("<div>");
      newRow.addClass("row");
      newRow.attr("id", "new-row");
      detailsWrapper.append(newRow);

      // Create details column
      var detailsColumn = $("<div>");
      detailsColumn.addClass("col-sm-6");
      detailsColumn.attr("id", "details-column" + i);
      newRow.append(detailsColumn);

      // Create details list
      detailsColumn.append(
        "<ul class='vehicle-details'>" +
            "<li><strong>Mileage:</strong> " + data[i].mileage + "</li>" + 
            "<li><strong>Engine:</strong> " + data[i].engine + "</li>" + 
            "<li><strong>Transmission:</strong> " + data[i].transmission + "</li>" + 
            "<li><strong>Drivetrain:</strong> " + data[i].drivetrain + "</li>" + 
            "<li><strong>Exterior Color:</strong> " + data[i].exteriorColor + "</li>" + 
            "<li><strong>Interior:</strong> " + data[i].interior + "</li>" +
        "</ul>");

        // Create extras div
        var extrasDiv = $("<div>");
        extrasDiv.addClass("col-sm-6");
        extrasDiv.attr("id", "extras-column-" + i);
        newRow.append(extrasDiv);

        extrasDiv.append(
            "<div class='extras'>" +
                "<p class='price'><strong>" + data[i].price + "</strong></p>" +
                "<a href='vehicle.html' class='btn btn-primary btn-view-details'>View Details</a>" +
            "</div>"
        );
    };
  });
  