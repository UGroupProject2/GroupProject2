var easyMonster = {
  name: "Travis",
  health: "10",
  attack: "7",
  agility: "3"
};
var normalMonster = {
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
};

var charecter = {
    attack: "5",
    health: "15",
    wisdom: "4",
    dexterity: "4",
    agility: "5"
};

var playerTurn = false;
var opponent = easyMonster;
var clickAttack = $("#attack").click();
var battle = function() {
 if(charecter.agility > opponent.agility ){
  playerTurn = true;}

  if(playerTurn){
      while(opponent.health > 0){
      if(clickAttack){
          opponent.health - charecter.attack;
        
      }
    }
  }

  elseif(!playerTurn){
     //enemy turn
    while(charecter.health > 0){
    charecter.health = charecter.health - opponent.attack;
        playerTurn = true;

    }
  }
  

}

