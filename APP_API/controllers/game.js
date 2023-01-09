const mongoose = require('mongoose');

const Game = mongoose.model('Game');

var sendJSONresponse = function(res, status, content) {
  res.status(status).json(content);
};

module.exports.getGames = function (req, res) {
  Game.find().exec(function (err, gamedata) {
    if (err) {
      sendJSONresponse(res, 500, err);
      return;
    }
    res
      .status(200)
      .json(gamedata);
  });
};


module.exports.createGame = function (req, res) {
  Game.create({
    name:req.body.name,
    genre:req.body.genre,
    author:req.body.author,
    rating:req.body.rating,
    price:req.body.price,
    img:req.body.img

  }, (err, gamedata) => {
    if (err) {
      res
        .status(400)
        .json(err);
    }
    else {
      res
        .status(201)
        .json(gamedata);
    }
  });
};


module.exports.getSingleGame = (req, res) => {
  Game
        .findById(req.params.gameId)
        .exec((err, gamedata) => {
            if (!gamedata) {
                return res
                    .status(404)
                    .json({
                        "message": "book id not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(201)
                .json(gamedata);
        });
};

module.exports.updateGame = function (req, res) {
  if (!req.params.gameId) {
    res
      .status(404)
      .json({
        "message": "Not found, game id is required"
      });
    return;
  }
  Game.findById(req.params.gameId)
    .exec((err, gamedata) => {
      if (!gamedata) {
        res
          .status(404)
          .json({
            "message": " book id  not found"
          });
        return;
      }
      else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }

      gamedata.name = req.body.name;
      gamedata.author = req.body.author;
      gamedata.price = req.body.price;
      gamedata.genre = req.body.genre;
      gamedata.rating = req.body.rating;
      gamedata.img = req.body.img;


      console.log(gamedata);
      gamedata.save((err, gamedata) => {
        if (err) {
          res
            .status(404)
            .json(err);
        }
        else {
          res
            .status(200)
            .json(gamedata);
           
        }
      });

    }

    );
};

module.exports.deleteGame = function (req, res) {
  const gameId = req.params.gameId;

  if (gameId) {
    Game
      .findByIdAndRemove(gameId)
      .exec((err, gamedata) => {
        if (err) {
          res
            .status(404)
            .json(err);
          return;
        }
        res
       
          .status(204)
          .json({ "message": " Book item is deleted succesfully" });
        
      });
  }
  else {
    res
      .status(404)
      .json({ "message": "No book id " });
  }
};
