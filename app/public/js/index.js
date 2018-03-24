// When user hits the search-btn
$("#btn-search").on("click", function(event) {
  event.preventDefault();
  window.location.href='search.html';
  // console.log(window.location.href);
  
  // Save the book they typed into the book-search input
  var vehicleSearched = $("#search-field").val().trim();
  
  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + vehicleSearched, function(data) {
    
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderVehicles(data);
    return false;
  });
  
});


function renderVehicles(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].make + "</h2>");
      div.append("<p>Model: " + data[i].model + "</p>");
      div.append("<p>Trim: " + data[i].trim + "</p>");
      div.append("<p>Mileage: " + data[i].mileage + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      var info = {
        id: $(this).attr("data-id")
      };

      $.post("/api/delete", info)
        // On success, run the following code
        .then(function(delData) {
          // Log the data we found
          console.log(delData);
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}
