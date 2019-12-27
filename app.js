// app.js

var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/common').config()
var provider = require('./routes/provider'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = `mongodb+srv://${config.MONGODB_USER}:${config.MONGODB_PW}@${config.MONGODB_URI}?retryWrites=true&w=majority`;
//var mongoDB = `mongodb+srv://api:MCOqTsC9cZPZi1m1@cluster0-4sxsm.mongodb.net/test?retryWrites=true&w=majority`;
console.log(mongoDB)

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/provider', provider);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
