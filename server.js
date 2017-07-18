// gives us access to entire express api
var express = require("express");

// Create our app
var app = express();
// access process variable PORT (allows heroku to start server)
// otherwise, if run locally, then use port 3000
const PORT = process.env.PORT || 3000;

// need to tell it to use http instead of https
// 'next' is called when this piece of middleware is done
// set of code that is run for items run through express
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    // using https, so redirect to http version
    res.redirect('http://' + req.hostname +  req.url);
  } else {
    // means it is using https, so just continue
    next();
  }
});

// Tell which folder we want to serve
// 'express.static' serves static files in 'public' folder
app.use(express.static('public'));

// Start server
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});