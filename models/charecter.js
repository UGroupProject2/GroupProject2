module.exports = function(sequelize, DataTypes) {
  var Charecter = sequelize.define("Charecter", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    race: DataTypes.STRING,
    class: DataTypes.STRING,
    gender: DataTypes.STRING,
    attack: DataTypes.INT,
    hitPoints: DataTypes.INT,
    intellagence: DataTypes.INT,
    dexterity: DataTypes.INT
  });

  Charecter.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Charecter.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Charecter;
};
