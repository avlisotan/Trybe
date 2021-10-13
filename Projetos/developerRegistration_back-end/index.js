const express = require('express');
require('dotenv').config();

const app = express();

const devsController = require('./controllers/devsController');

app.use('/', devsController);

const PORT = process.env.MYSQL_PORT || 3000;

app.listen(3000, () => console.log(`Server active on port ${PORT}`));
