/* import of required packages */
const express = require('express');
const router = express.Router();

/* import of the Schema that was created for creation and storage of information */
const user = require('../models/user')

/**
* [Implementation of the get request, where the information is searched 
  in the database and returns a json file with the data of the elements in the database.]
*
*
* @throws If presented by the project
*
* @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
*
* @since Version 1
*
*
*/
router.get('/', async (req, res, next) => {
  try {
    const userData = await user.find({}).lean()
    res.json(
      userData
    )
  } catch (err) {
    console.log(err);
  }

});

/**
* [Implementation of the get request, where the information is searched 
  in the database and returns a json file with the data of the elements in the database.]
*
*
* @throws If presented by the project
*
* @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
*
* @since Version 1
*
*
*/
router.post('/user', async (req, res, next) => {
  try {
    const userData = await user.find({
      $and: [
        { 'email': { $eq: req.body.email } },
        { 'password': { $eq: req.body.password } }

      ]

    })
    res.json(
      userData
    )
  } catch (err) {
    console.log(err);
  }

});

/* module import */
module.exports = router;