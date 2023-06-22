const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {mongoose} = require('./DB/database');
const routes = require('./routes/index');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.set('port', 3001)

app.use('/api', routes);

module.exports = app;