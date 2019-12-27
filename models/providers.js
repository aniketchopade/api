var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmailProvidersSchema = new Schema({
    provider_domain: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('email_providers', EmailProvidersSchema);