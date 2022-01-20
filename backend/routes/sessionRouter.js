const express = require('express');

const router = express.Router();


router.post('/', async (req, res) => {
  try {
if(req.session.user){
  res.json({ user: true});
}else{

  res.json({ user: false});
}


  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
});

module.exports = router;
