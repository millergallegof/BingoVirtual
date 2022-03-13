/* import of required packages */
const express = require('express');
const router = express.Router();

/* import of the Schema that was created for creation and storage of information */
const user = require('../models/user')

/**
* [implementation of the DELETE request type to perform a logical deletion of the account. ]
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
router.delete('/:id', function (req, res, next) {

  user.deleteById(req.params.id)

      .then(result => res.json(result))
      .catch(err => res.jason(err))


})

module.exports = router;