// // importacion de librerias
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

// importacion componentes proyectos
const conexionDB = require("./config/conexionbd");

const app = express();

/* system templates */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* mongodb connection to a specific database */
conexionDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* use of body-parser to bring elements from the formulary */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* use of cors */
app.use(cors())

/* system routes */
app.use('/users', require('./routes/find-user'));
app.use('/user', require('./routes/create-user'));
app.use('/update', require('./routes/update-user'));
app.use('/delete', require('./routes/delete-user'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
