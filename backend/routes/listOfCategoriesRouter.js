const express = require('express');
const bcrypt = require('bcrypt');

const { Expense } = require('../models/index');

const router = express.Router();

router.route('/')
  .post(async (req, res) => {
    const expenses = await Expense.findAll();   
    try {
      

      if (!expenses) {
        res.status(401).json({ isInvalidEmail: true });
      }
res.json(expenses)
    } catch (error) {
      console.log(error.message);
      res.status(401).end();
    }
  });
module.exports = router;

