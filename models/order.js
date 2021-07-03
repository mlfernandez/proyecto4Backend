"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "idUser" });
      Order.belongsTo(models.Movie, { foreignKey: "idMovie" });
      
    }
    
    
  }
  Order.init(
    {
      idUser: DataTypes.INTEGER,
      idMovie: DataTypes.INTEGER,
      titleMovie: DataTypes.STRING,
      posterMovie: DataTypes.STRING,
      trailer: DataTypes.STRING,
      rentalDate: DataTypes.DATE,
      returnDate: DataTypes.DATE,
      isActive: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
