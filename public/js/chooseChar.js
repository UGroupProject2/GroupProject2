$(document).ready(function() {
  var loggedUserID;
    

  function getUser(){
    $.get("/api/user_data").then(function(data) {
      console.log(data.id);
      loggedUserID = data.id;
      getPosts(loggedUserID);
    });
  }

  function populateList(htmlString){

    
    $("#list").append(htmlString);
    
  };

  function getPosts(loggedUser) { 
    
    var user = "/?user_id=" + loggedUser;

    $.get("/api/chars" + user, function(data) {

      console.log("Chars", data);
      chars = data;
      if (!chars || !chars.length) {
        var string = "<h1>No characters found</h1>";  
        populateList(string);
      }
      else {

        var string = "";
        for(var i =0; i<chars.length; i++){
          string += "<button type='button' class='btn btn-primary'>" + chars[i].name + "</button>";
        };        
        
        populateList(string);
      }
    });
  }

  getUser();

  $("#start").click(function(event) {
    event.preventDefault();
    alert("clicked");

  });

});