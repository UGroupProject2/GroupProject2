$(document).ready(function() {

  var easyMonster = {
    name: "Travis",
    health: "10",
    attack: "7",
    agility: "3"
  };
  /* var normalMonster = {
  name: "lint",
  health: "15",
  attack: "9",
  agility: "4"
};
var hardMonster = {
  name: "sequalize",
  health: "20",
  attack: "10",
  agility: "5"
}; */

  var character = {
    attack: "5",
    health: "20",
    wisdom: "4",
    dexterity: "4",
    agility: "5"
  };

  var opponent = easyMonster;

  var battle = function() {

    $("#playerhp").text(character.health);
    $("#enemyhp").text(opponent.health);

    $("#attack").click(function(event) {
      event.preventDefault();

      if(character.health > 0){
        opponent.health = opponent.health - character.attack;
        character.health = character.health - opponent.attack;
        $("#playerhp").text(character.health);
        $("#enemyhp").text(opponent.health);
        $("#message").text("You attacked for " + character.attack + " but were hit back for " + opponent.attack + " damage.");
      }

      if(opponent.health < 0){
        $("#playerhp").text(character.health);
        $("#enemyhp").text("DEAD!");
      }

      if(character.health < 0){
        $("#playerhp").text("YOU ARE DEAD!");
        $("#enemyhp").text(opponent.health);
      }

    });
  };

  battle();

});

