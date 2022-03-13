/* import of required packages */
var express = require('express');
var router = express.Router();

/* import of the Schema that was created for creation and storage of information */
const user = require('../models/user')

/**
* [implementation of PATCH request to update the user's password. ]
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
router.patch('/:id', function (req, res, next) {

  user.findByIdAndUpdate(req.params.id, { password: req.body.password })
      .then((result) => { res.json(result) })
      .catch((err) => { res.json(err) });

});

/* module import */
module.exports = router;
