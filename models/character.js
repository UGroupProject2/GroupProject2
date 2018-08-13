module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    class: DataTypes.STRING,
    gender: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    health: DataTypes.INTEGER,
    wisdom: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    agility: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      references: "User",
      referencesKey: "id"
    }
  });

  Character.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Character.sequelieBelongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Character;
};
