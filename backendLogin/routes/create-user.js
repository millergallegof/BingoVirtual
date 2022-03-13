/* import of required packages */
const express = require('express');
const router = express.Router();

/* import of the Schema that was created for creation and storage of information */
const user = require('../models/user')

/**
* [implementation of a post request to send information and create a new element and store it in a database.]
*
*
* @throws sending information not found in the default Schema
*
* @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
*
* @since Version 1
*
*
*/
router.post('/', function (req, res, next) {
  try {
    // se crea un usuario de acuerdo al esquema que se creo en models-user
    const user = new User({
      email: req.body.email,
      password: req.body.password,

    })

    user
      .save()
      .then(result => res.json(result))
      .catch(err => res.json(err));
    console.log('Usuario Creado Correctamente');
  } catch (error) {
    console.log(error);
  }

})

/* module import */
module.exports = router;
