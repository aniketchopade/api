var Provider = require('../models/providers');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.provider_create = function (req, res,next) {
    var provider = new Provider(
        {
            provider_domain: req.body.domain,           
        }
    );

    provider.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Provider Created successfully')
    })
};

exports.provider_details = function (req, res,next) {
    domain = req.params.id
    Provider.findOne({
        provider_domain: domain
    }, function (err, provider) {                    
        if (err) return next(err);
        if (provider) {
            res.status(200)
            res.send(provider);
        } else {
            res.status(404)
            res.send({});
        }
    })
};

exports.provider_update = function (req, res, next) {
    Provider.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, provider) {
        if (err) return next(err);
        res.send('Provider udpated.');
    });
};

exports.provider_delete = function (req, res, next) {
    Provider.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};