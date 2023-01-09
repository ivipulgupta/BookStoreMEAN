const { response } = require('express');
const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};


const _renderHomepage = function (req, res, responseBody) {
  res.render('list', {
    games: responseBody
  });
};

module.exports.gameList = function (req, res) {
  const path = '/api/games';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      _renderHomepage(req, res, body);
    }
  );
};


const _renderDetailPage = function (req, res, responseBody) {
  res.render('details', {
    currentGame: responseBody
  });
};

module.exports.gameInfo = function (req, res) {
  const path = `/api/games/${req.params.gameid}`; 
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      _renderDetailPage(req, res, body);
    }
  );
};

const _renderCreatePage = function(req,res) {
  res.render ('create',{
    title:"Create new Game"
  });
};

module.exports.addnewGame = function(req,res){
  _renderCreatePage(req,res);

};

// module.exports.doaddnewGame = function(req,res){
//   const path='/api/books';
//   const postdata = {
//     name:req.body.name
//   };
//   const requestOptions ={
//     url: apiOptions.server+path,
//     method:'POST',
//     json:postdata
//   };
//   request(
//     requestOptions,
//     (err,response,body) => {
//       if(response.statusCode ===200)
//       {
//         res.redirect('/');
//       }
//     }
//   );
// };



module.exports.doaddnewGame = function(req,res){
  const path='/api/games/';
  console.log("Create " + req.body.name + ' ' + req.body.author + ' ' + req.body.price + ' ' + req.body.genre + ' ' + req.body.image);
  const postdata = {
    name:req.body.name,
    genre:req.body.genre,
    author:req.body.author,
    //description:'',
    //quantityOfBook:0,
    price:req.body.price,
    image:req.body.image
  };
  const requestOptions ={
    url: apiOptions.server+path,
    method:'POST',
    json:postdata
  };
  request(
    requestOptions,
    (err,response,body) => {
      if(response.statusCode === 200 || response.statusCode === 201)
      {
        res.redirect('/');
      }
    }
  );
};



module.exports.deleteGame = function (req, res) {
  const path = '/api/games/' + req.params.gameid; 
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'DELETE',
    json: {}
  };
  request(
    requestOptions,
    (err,response,body) => {
        res.redirect('/');     
    }
  );
};


const _renderUpdatepage = function (req, res, responseBody) {
  res.render('update', {
    title:"Update Book",
    currentBook: responseBody
  });
};

module.exports.updateGame = function (req, res) {
  const path = `/api/games/${req.params.gameid}`; 
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      _renderUpdatepage(req, res, body);
    }
  );
};

module.exports.doUpdateNewGame = function(req,res){
  const path='/api/games/' + req.params.gameid; 
  
  const postdata = {
    name:req.body.name,
    author:req.body.author,
    price:req.body.price,
    genre:req.body.genre
  };
  const requestOptions ={
    url: apiOptions.server+path,
    method:'PUT',
    json:postdata
  };
  request(
    requestOptions,
    (err,response,body) => {
      res.redirect('/');
    }
    
  );
  console.log(postdata);
};