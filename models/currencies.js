var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Currency = new Schema({
    ISO: {type: String, required: true},
    Name: {type: String, required: true}
});

// Export the model
module.exports = mongoose.model('currency', Currency);