const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

const router = express.Router();
router.route('/')
  .post(async (req, res) => {
    try {
      const { email, password } = req.body;

      const userByEmail = await User.findOne({
        where: {
          email,
        },raw:true
      });

      if (!userByEmail) {
        res.status(401).json({ isInvalidEmail: true });
      }

      const isValidPassword = await bcrypt.compare(password, userByEmail.password);

      if (!isValidPassword) {
        return res.status(401).json({ isInvalidPassword: true });
      }
      req.session.user = {
        email: userByEmail.email,
        username: userByEmail.name,
        id: userByEmail.id,
      }
      
      res.json({ user: req.session.user });
    } catch (error) {
      console.log(error.message);
      res.status(401).end();
    }
  });
module.exports = router;
