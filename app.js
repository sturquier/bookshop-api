const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const options = {
	useMongoClient: true
};

mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/shop', options);

moment = require('moment');

const app = express();
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router = express.Router();
require(path.join(__dirname, 'routes'));
app.use(router);

app.listen(3000);