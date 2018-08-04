module.exports = function(sequelize, DataTypes) {
    var Inventory = sequelize.define("inventory", {
      // Giving the Author model a name of type STRING
      itemName: DataTypes.STRING,
        //   money??




    });
  
    Inventory.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Inventory.belongsTO(models.charecter, {
        foreignKey: {
            allowNUll: false
        }
      });
    };
  
    return Inventory;
  };