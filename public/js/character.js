$(document).ready(function () {

  var counter = 0;
  var counterep = 20;
  var counter = 0;
  var counterdex = 0;
  var counterwis = 0;
  var counteragi = 0;

  $("#counterep").text(counterep);

  $("#counter").text(counter);

  $("#counterdex").text(counterdex);

  $("#add").click(function () {


    if(counterep !== 0){
      counter = counter + 1;
      counterep = counterep -1;    
    }
    $("#counterep").text(counterep);
    $("#counter").text(counter);
  });

  $("#subtract").click(function () {

    if(counter !== 0){
      counter = counter - 1;
      counterep = counterep + 1;    
    }
    $("#counterep").text(counterep);
    $("#counter").text(counter);
  });

  $("#reset").click(function() {
    counterep = counterep + counter;
    counter = 0;
    $("#counterep").text(counterep);
    $("#counter").text(counter);
  });


  console.log(counterep);



  $("#adddex").click(function () {
    if(counterep !== 0){
      counterdex = counterdex + 1;
      counterep = counterep -1;    
    }
    $("#counterep").text(counterep);
    $("#counterdex").text(counterdex);
  });

  $("#subtractdex").click(function () {
    if(counterdex !== 0){
      counterdex = counterdex - 1;
      counterep = counterep + 1;}
    $("#counterep").text(counterep);
    $("#counterdex").text(counterdex);
  });

  $("#resetdex").click(function () {
    counterep = counterep + counterdex;
    counterdex = 0;
    $("#counterep").text(counterep);
    $("#counterdex").text(counterdex);
  });


  $("#counterwis").text(counterwis);

  $("#addwis").click(function () {
    if(counterep !== 0){
      counterwis = counterwis + 1;
      counterep = counterep -1;    
    }
    $("#counterep").text(counterep);
    $("#counterwis").text(counterwis);
  });

  $("#subtractwis").click(function () {
    if(counterwis !== 0){
      counterwis = counterwis - 1;
      counterep = counterep + 1;}
    $("#counterep").text(counterep);
    $("#counterwis").text(counterwis);
  });

  $("#resetwis").click(function () {
    counterep = counterep + counterwis;
    counterwis = 0;
    $("#counterep").text(counterep);
    $("#counterwis").text(counterwis);
  });

  $("#counteragi").text(counteragi);

  $("#addagi").click(function () {
    if(counterep !== 0){
      counteragi = counteragi + 1;
      counterep = counterep -1;    
    }
    $("#counterep").text(counterep);
    $("#counteragi").text(counteragi);
  });

  $("#subtractagi").click(function () {
    if(counteragi !== 0){
      counteragi = counteragi - 1;
      counterep = counterep + 1;}
    $("#counterep").text(counterep);
    $("#counteragi").text(counteragi);
  });

  $("#resetagi").click(function () {
    counterep = counterep + counteragi;
    counteragi = 0;
    $("#counterep").text(counterep);
    $("#counteragi").text(counteragi);
  });

  var x = myFunction(); // Function is called, return value will end up in x

  function myFunction(counter, counteragi, counterdex, counterwis) {
    return counter + counteragi + counterdex + counterwis; // Function returns the product of a and b
  }
  console.log(x);

  // Getting references to our form and input
  var characterForm = $("form.character");
  var nameInput = $("input#character_name");
  var strengthInput = $("input#counter");
  var dexterityInput = $("input#counterdex");
  var agilityInput = $("input#counteragi");
  var wisdomInput = $("input#counterwis");

  // When the signup button is clicked, we validate the email and password are not blank
  characterForm.on("submit", function(event) {
    event.preventDefault();
    var charData = {
      name: nameInput.val().trim(),
      attack: strengthInput.val().trim(),
      dexterity: dexterityInput.val().trim(),
      agility: agilityInput.val().trim(),
      wisdom: wisdomInput.val().trim()
    };

    if (!charData.name || !charData.attack || !charData.dexterity ||
       !charData.agility || !charData.wisdom) {
      return;
    }
    
    createCharacter(charData.name, charData.attack, charData.dexterity, charData.agility, charData.wisdom );
    nameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function createCharacter(name, attack, dexterity, agility, wisdom) {
    $.post("/api/newChar", {
      name: name,
      attack: attack,
      dexterity: dexterity,
      agility: agility,
      wisdom: wisdom
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});