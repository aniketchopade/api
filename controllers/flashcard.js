var Flashcard = require('../models/flashcards');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.flashcard_create = function (req, res,next) {
    var flashcard = new Flashcard(
        {
            question: req.body.question, 
            answer: req.body.answer,           
            category: req.body.category,           
            status: req.body.status, 
            userid: req.body.userid          
        }
    );
    flashcard.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(200);
        res.send(flashcard);
    })
};

exports.flashcard_details = function (req, res,next) {
    console.log('find by id', req.params.userid)
    user = req.header('User')
    flashcard = req.params.userid
    Flashcard.findOne({
        id: flashcard
    }, function (err, flashcard) {                    
        if (err) return next(err);
        if (flashcard) {
            res.status(200)
            res.send(flashcard);
        } else {
            res.status(404)
            res.send({});
        }
    })
};

exports.flashcard_categories = function (req, res,next) {
    user = req.header('User')
    console.log("find all categories for user", user)
    Flashcard.distinct("category", {userid: user},function (err, flashcard) {                    
        if (err) return next(err);
        if (flashcard) {
            res.status(200)
            res.send(flashcard);
        } else {
            res.status(404)
            res.send({});
        }
    })
};

exports.flashcard_findAll = function (req, res,next) {
    user = req.header('User')

    Flashcard.find({
    }, function (err, flashcards) {                    
        if (err) return next(err);
        if (flashcards) {
            res.status(200)
            res.send(flashcards);
        } else {
            res.status(404)
            res.send({});
        }
    })
};

exports.flashcard_find = function (req, res,next) {
    user = req.header('User')

    console.log('find by category', req.params.category)
    category = req.params.category
    Flashcard.find({
        category: category
    }, function (err, flashcards) {                    
        if (err) return next(err);
        if (flashcards) {
            res.status(200)
            res.send(flashcards);
        } else {
            res.status(404)
            res.send({});
        }
    })
};

exports.flashcard_update = function (req, res, next) {
    user = req.header('User')

    Flashcard.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, flashcard) {
        if (err) return next(err);
        res.status(200)
        res.send(flashcard);
    });
};

exports.flashcard_delete = function (req, res, next) {
    user = req.header('User')

    Flashcard.findByIdAndRemove(req.params.id, function (err,flashcard) {
        if (err) return next(err);
        res.status(200)
        res.send(flashcard);
    })
};