var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var util = require('util');

var PORT=8080;

var app = express();

app.set('port', process.env.PORT || PORT);
var options = {
  dotfiles: 'ignore',
  etag: false,
   extensions: ['png', 'html'],
  //index: false,
  redirect: false
};

app.use(express.static(path.join(__dirname, 'public'), options));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(util.format('split4ever listening at http://%s:%s', host, port));

});
