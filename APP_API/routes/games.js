const express = require('express');
const router = express.Router();

const ctrlGame = require('../controllers/game');

router.get('/games', ctrlGame.getGames);          
router.post('/games', ctrlGame.createGame);

router.get('/games/:gameId', ctrlGame.getSingleGame);
router.put('/games/:gameId', ctrlGame.updateGame);
router.delete('/games/:gameId', ctrlGame.deleteGame);

module.exports = router;