/* import of required packages */
const mongoose = require('mongoose');
const mongooseSoftDelete = require('mongoose-delete');

/* Schema variable creation - Model */
const Schema = mongoose.Schema;

/**
* [Method to validate the email entered into the schema according to regexr format.]
*
*
* @throws If presented by the project
*
* @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
*
* @see Check the link where the regEx is obtained http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=psw
*
* @since Version 1
*
*
*/
const validateEmail = (email) => {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
}

/**
* [Method to validate the password entered into the schema according to regexr format.]
*
*
* @throws If presented by the project
*
* @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
*
* @see Check the link where the regEx is obtained http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=psw
*
* @since Version 1
*
*
*/
const validatePassword = (email) => {
    var re = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    return re.test(email);
}

/**
* [Creation of the Schema for the use and storage of elements in the database, using moongose specific methods.]
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
const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        requeried: true,
        unique: [true, 'El correo electronico es requerido'],
        validate: {
            validator: validateEmail,
            message: 'Por favor digite un correo valido'
        }
    },
    password: {
        type: String,
        unique: [true, 'La contraseña es requerida'],
        validate: {
            validator: validatePassword,
            message: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.'
        }
    }

}, { timestamps: true });

/* the logical log deletion plugin is used */
userSchema.plugin(mongooseSoftDelete);

/* the module is exported for use in future files */
module.exports = User = mongoose.model('User', userSchema)