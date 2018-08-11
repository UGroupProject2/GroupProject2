module.exports = function(sequelize, DataTypes) {
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
    });
  
    Character.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Character.belongsTo(models.user, {
        foreignKey: {
            allowNull: false
          }
      });
    };
  
    return Character;
  };