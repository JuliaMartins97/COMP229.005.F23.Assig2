var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('../app/routes/index');
var apiRoutes = require('../app/routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api', apiRoutes);


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
  res.status(err.status || 500); //it's gonna be the err.status or erro 500
  res.json({
    success: false,
    message: err.message //getting the erro message from the erro object app.use...
  }); 
});

module.exports = app;
