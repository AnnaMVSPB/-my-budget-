const express = require('express');
const { Expense,ExpensesSum,Income } = require('../db/models');
const router = express.Router();

router.post('/', async (req, res) => {

  try {
    const expenses = await Expense.findAll();   
    const expensesSum = await ExpensesSum.findAll({
      where: {
        userId:req.session.user.id,
      },raw:true
    });
   const income = await Income.findAll({
    where: {
      id_user:req.session.user.id,
    },raw:true
   });
    res.json({expenses,expensesSum,income});

  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
});

module.exports = router;
