const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const getFavouriteSongs = require('../controllers/getFavouritesSongs');

router.get('/', homeController.getHome);
router.post('/getData', getFavouriteSongs.set);

module.exports = router;