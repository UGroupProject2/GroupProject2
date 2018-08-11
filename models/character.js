module.exports = function (sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    // Giving the Author model a name of type STRING

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    class: {
      type: DataTypes.STRING,
      allowNull: false
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },

    attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    agility: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Character.associate = function (models) {
    // Associating user with character
    // When an user is deleted, also delete any associatedcharacter
    Character.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }; 

  return Character;
};