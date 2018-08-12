$(document).ready(function () {

  var counterep = 20;
  var counter = 0;
  var counterdex = 0;
  var counterwis = 0;
  var counteragi = 0;
  var countervit = 0;

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

  $("#countervit").text(countervit);

  $("#addvit").click(function () {
    if(counterep !== 0){
      countervit = countervit + 1;
      counterep = counterep -1;    
    }
    $("#counterep").text(counterep);
    $("#countervit").text(countervit);
  });

  $("#subtractvit").click(function () {
    if(countervit !== 0){
      countervit = countervit - 1;
      counterep = counterep + 1;}
    $("#counterep").text(counterep);
    $("#countervit").text(countervit);
  });

  $("#resetvit").click(function () {
    counterep = counterep + countervit;
    countervit = 0;
    $("#counterep").text(counterep);
    $("#countervit").text(countervit);
  });

  var x = myFunction(); // Function is called, return value will end up in x

  function myFunction(counter, counteragi, counterdex, counterwis) {
    return counter + counteragi + counterdex + counterwis; // Function returns the product of a and b
  }
  console.log(x);

  var counter = 0;
  var counterdex = 0;
  var counterwis = 0;
  var counteragi = 0;
  var countervit = 0;

  // When the signup button is clicked, we validate the email and password are not blank
  $("#characterButton").click(function(event) {
    event.preventDefault();
    console.log("button clicked");
    var charData = {
      name: $("#character_name").val().trim(),
      attack: counter,
      dexterity: counterdex,
      agility: counteragi ,
      wisdom: counterwis,
      HP: countervit * 3 + 50
    };

    console.log(charData.name);
    console.log(charData.attack);
    console.log(charData.dexterity);
    console.log(charData.agility);
    console.log(charData.wisdom);
    console.log(charData.HP);


    if (!charData.name || !charData.attack || !charData.dexterity ||
       !charData.agility || !charData.wisdom || !charData.HP) {
      return;
    }
    
    createCharacter(charData.name, charData.attack, charData.dexterity, 
      charData.agility, charData.wisdom, charData.HP );
    nameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function createCharacter(name, attack, dexterity, agility, wisdom, HP) {
    $.post("/api/newChar", {
      name: name,
      attack: attack,
      dexterity: dexterity,
      agility: agility,
      wisdom: wisdom,
      health: HP
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