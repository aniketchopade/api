var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var XRates = new Schema({
    currency: {type: String, required: true},
    lastUpdated: {type: String, required: true},
    valueWithUSD: {type: String, required: true}
});

// Export the model
module.exports = mongoose.model('xrates', XRates);