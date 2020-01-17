var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var flashcard_controller = require('../controllers/flashcard');
// a simple test url to check that all of our files are communicating correctly.
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', flashcard_controller.test);


router.post('/create', flashcard_controller.flashcard_create);

router.get('/', flashcard_controller.flashcard_findAll);

router.get('/id/:id', flashcard_controller.flashcard_details);

router.get('/category/:category', flashcard_controller.flashcard_find);

router.get('/categories', flashcard_controller.flashcard_categories);

router.put('/:id/update', flashcard_controller.flashcard_update);

router.delete('/:id/delete', flashcard_controller.flashcard_delete);


module.exports = router;