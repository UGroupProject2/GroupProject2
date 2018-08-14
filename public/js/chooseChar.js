$(document).ready(function() {
  var loggedUserID;
  /* var loggedUserName; */
    

  function getUser(){
    $.get("/api/user_data").then(function(data) {
      console.log(data.id);
      /* console.log(data.name); */
      loggedUserID = data.id;
      /* loggedUserName = data.name;
      $("#userName").append(loggedUserName); */
      getChars(loggedUserID);
    });
  }

  function populateList(htmlString){

    
    $("#list").append(htmlString);
    
  };

  function getChars(loggedUser) { 
    
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

         /*  $.get("/api/char_data").then(function(data) {
            console.log(data.id);
            chosenChar = data.id;
          }); */


          var chosenChar = 5;

          string += "<button type='button' class='btn btn-basic'><a href='planet_select/:" + chosenChar + "'>" + chars[i].name + "</a></button>";
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