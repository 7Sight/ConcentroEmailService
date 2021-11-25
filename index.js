require('dotenv').config()

const express = require('express');

const cors = require('cors');

const routes  = require('./src/routes');

const app = express();

app.options('*', cors())

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333);

console.log("Run in port 3333");