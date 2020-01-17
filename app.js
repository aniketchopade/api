// app.js

var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/common').config()
var provider = require('./routes/provider'); // Imports routes for the products
var xrates = require('./routes/xrates'); // Imports routes for the xrates
var flashcard = require('./routes/flashcard'); // Imports routes for the flashcards
var cors = require('cors')
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = `mongodb+srv://${config.MONGODB_USER}:${config.MONGODB_PW}@${config.MONGODB_URI}?retryWrites=true&w=majority`;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/provider', provider);
app.use('/xrates', xrates);
app.use('/flashcard', flashcard);


var port = config.SERVER_PORT;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
