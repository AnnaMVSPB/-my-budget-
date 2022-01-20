const express = require('express');
const { Income } = require('../models/index');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { sum,comments } = req.body;
  
    const income = await Income.create({ 
      income:Number(sum),
      comments,
      id_user:req.session.user.id,
    });
   

    res.json({save:true});

  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
});

module.exports = router;
