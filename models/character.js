module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    // Giving the character model a name of type STRING
    name: DataTypes.STRING, 
    class: DataTypes.STRING,
    gender: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    health: DataTypes.INTEGER,
    wisdom: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    agility: DataTypes.INTEGER,
    
  });
  
  Character.associate = function(models) {
    // Associating character with user
    // When a user is deleted, also delete any associated chars
    Character.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Character;
};
