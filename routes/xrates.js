var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var xrates_controller = require('../controllers/xrates');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', xrates_controller.test);

router.get('/:to/:from', xrates_controller.xrates_details);

router.get('/:iso', xrates_controller.xrates_name);


router.get('/', xrates_controller.xrates_index);



module.exports = router;