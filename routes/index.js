const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const getFavouriteSongs = require('../controllers/getFavouritesSongs');
const setFavouriteSong = require('../controllers/setFavouriteSong')
const removeFavouriteSong = require('../controllers/removeFavouriteSong')

router.get('/', homeController.getHome);
router.post('/getData', getFavouriteSongs.set);
router.post('/setFavouriteSong', setFavouriteSong.set);
router.post('/removeFavouriteSong', removeFavouriteSong.set);

module.exports = router;