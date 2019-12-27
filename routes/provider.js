var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var provider_controller = require('../controllers/provider');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', provider_controller.test);


router.post('/create', provider_controller.provider_create);

router.get('/:id', provider_controller.provider_details);

router.put('/:id/update', provider_controller.provider_update);

router.delete('/:id/delete', provider_controller.provider_delete);


module.exports = router;