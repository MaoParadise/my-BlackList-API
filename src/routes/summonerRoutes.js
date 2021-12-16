const express = require('express');
const router = express.Router();
const summoner = require('../controllers/summonerController');


// Getter for all products
router.get('/summoner/:summoner', summoner.getSummoner);
router.get('/matches/:puuid', summoner.getMatches);
router.get('/whoWon/:matchId', summoner.getWhoWIn);

module.exports = router;