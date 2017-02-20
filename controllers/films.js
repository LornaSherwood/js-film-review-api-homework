var express = require('express');
var filmRouter = express.Router();
var Films = require('../client/src/models/films.js');
var Film = require('../client/src/models/film.js');
var Review = require('../client/src/models/review.js');

var films = new Films(); 

filmRouter.get('/', function(req, res){ 
  res.json(films);
});

filmRouter.get('/:id', function(req, res){ // more specific route first
  res.json({data: films[req.params.id]}) 
})

filmRouter.post('/', function(req, res){
  films.push(req.body.film);  
  res.json({data: films});
});

filmRouter.put('/:id', function(req, res){  
  films[req.params.id] = req.body.film;
  res.json({data: films}); 
});

filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1) 
  res.json({data: films}); 
});

module.exports = filmRouter;