const express = require('express'); // to import the library express
const router = express.Router();  //to use the Router lib 
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

router.post('/create',homeController.create);

router.get('/delete',homeController.delete);
router.get('/progress',homeController.progress);


module.exports = router;  // to export router to the main index.js file