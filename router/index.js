const express = require('express'); // to import the library express
const router = express.Router();  //to use the Router lib 
const homeController = require('../controllers/home_controller');

//this is for home
router.get('/',homeController.home);
//this si to create the habit
router.post('/create',homeController.create);
//this is to delete the habit
router.get('/delete',homeController.delete);
router.get('/progress',homeController.progress);


module.exports = router;  // to export router to the main index.js file