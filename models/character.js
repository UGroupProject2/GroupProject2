module.exports = function(sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING, 
      race: DataTypes.STRING,
      class: DataTypes.STRING,
      gender: DataTypes.STRING,
      attack: DataTypes.INTEGER,
      hitPoints: DataTypes.INTEGER,
      intelligence: DataTypes.INTEGER,
      dexterity: DataTypes.INTEGER,  
    });
  
    Character.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Character.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
          }
      });
    };
  
    return Character;
  };
