// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/mainMenu");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/mainMenu");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/planet_select/:id", function(req, res) {
    var char = req.params.char_id; 
    console.log(char);
    
    db.Character.findAll({
      where: {
        id: char
      }
      
    }).then(function(dbPost) {
      res.json(dbPost);
    });

    res.sendFile(path.join(__dirname, "../public/html/choosePlanet.html"));
  });



  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/mainMenu", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/mainMenu.html"));
  });

};
