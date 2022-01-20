'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({User}) {
      this.belongsTo(User,{foreignKey:'id_user'})
    }
  };
  Income.init({
    income: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
    id_user:{ type:DataTypes.INTEGER,
      references:{
        model:'User',
        key:'id'
      }}
     }, {
    sequelize,
    modelName: 'Income',
  });
  return Income;
};
