// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // add route loads the add.html page, where users can enter new books to the db
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });

  // all route loads the all.html page, where all books in the db are displayed
  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });

  // short route loads the short.html page, where short books in the db are displayed
  app.get("/short", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/short.html"));
  });

  // long route loads the long.html page, where long books in the db are displayed
  app.get("/long", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/long.html"));
  });

};
