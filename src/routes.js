const express = require('express');

const routes = express.Router();

const SendEmail = require('./controllers/SendEmail');

routes.post('/sendEmail', SendEmail.send);

routes.post('/sendEmailPatner', SendEmail.sendPatner);

routes.post('/sendEmailEJ', SendEmail.sendEJ);

module.exports = routes;