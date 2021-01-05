const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/user');

// @route   POST api/users
// @desc    Register user
// @access  Public


router.post('/', [

  check('name', 'Name is required')
  .not()
  .isEmpty(),

  check('email', 'Please enter a valid email')
  .isEmail(),

  check('password', 'Please enter a password containing 6 or more characters')
  .isLength({
    min: 6
  })
], 
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, password } = req.body;

  try {
      //See if user exists
      //Get users gravatar
      // Encrypt password
      // Return JSON web token
    
  } catch (err) {
    
  }


  res.send('User route');

});

module.exports = router;