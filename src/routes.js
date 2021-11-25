const cors = require('cors');
const express = require('express');

const routes = express.Router();

const SendEmail = require('./controllers/SendEmail');

var whitelist = [ process.env.CORS_DOMAIN]
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

routes.post('/sendEmail', cors(corsOptionsDelegate), SendEmail.send);

routes.post('/sendEmailPatner',cors(corsOptionsDelegate), SendEmail.sendPatner);

routes.post('/sendEmailEJ', cors(corsOptionsDelegate),SendEmail.sendEJ);

module.exports = routes;