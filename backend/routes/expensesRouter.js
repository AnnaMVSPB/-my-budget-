const express = require('express');
const { ExpensesSum,Expense } = require('../models/index');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { sum, name } = req.body;
    
    const idExpenssesSum = await Expense.findOne({
      where: {
        nameCategory:name,
      },raw:true,
    });
   
    const user = await ExpensesSum.create({ 
      sum:Number(sum),
    userId:req.session.user.id,
    expensesId:idExpenssesSum.id
    });
   

    res.json({save:true});

  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
});

module.exports = router;
