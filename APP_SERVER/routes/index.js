var express = require('express');
var router = express.Router();

const mainController = require('../Controllers/main');

const gameController = require('../Controllers/game');
const ctrlAbout = require("../controllers/about");
/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'A Book Store' });
  });
  

router.get('/list', gameController.gameList);
router.get('/about',ctrlAbout.aboutInfo);
router.get('/contact', mainController.contact);
router.get('/display',mainController.display)

router.get('/games/:gameid',gameController.gameInfo);

// router.route('/new')
//     .get(boookController.addnewBook)
//     .post(boookController.doAddNewBook);

router.route('/new')
    .get(gameController.addnewGame)
    .post(gameController.doaddnewGame);

router.route('/delete/:gameid')
    .get(gameController.deleteGame);

router.route('/update/:gameid')
    .get(gameController.updateGame)
    .post(gameController.doUpdateNewGame);

module.exports = router;