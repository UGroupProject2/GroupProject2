module.exports = function (sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    race: DataTypes.STRING,
    class: DataTypes.STRING,
    gender: DataTypes.STRING,
    attack: DataTypes.INT,
    hitPoints: DataTypes.INT,
    intellagence: DataTypes.INT,
    dexterity: DataTypes.INT,
    AP: DataTypes.INT //ability points
  });

  Character.associate = function (models) {
    // Associating user with character
    // When an user is deleted, also delete any associatedcharacter
    Character.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Character;
};