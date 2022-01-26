'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExpensesSum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Expense}) {
      // define association here
      this.belongsTo(User, {foreignKey: 'userId'})
      this.belongsTo(Expense, {foreignKey: 'expensesId'})
    }
  };
  ExpensesSum.init({
    sum:{
      type: DataTypes.INTEGER,
      allowNull: false
    } ,
    userId: { type:DataTypes.INTEGER,
      references:{
        model:'User',
        key:'id'
      }
      },
    expensesId: { type:DataTypes.INTEGER,
      references:{
        model:'Expense',
        key:'id'
      }
      },
  }, {
    sequelize,
    modelName: 'ExpensesSum',
  });
  return ExpensesSum;
};
