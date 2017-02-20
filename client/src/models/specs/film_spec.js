var Film = require('../film');
var assert = require('assert');

describe('Film', function(){
  var film;

  beforeEach(function(){
    film = new Film({
      title: "Titanic",
      actors: ["Leo", "Kate"],
    });
  });

  it('should have a title', function(){
    assert.equal("Titanic", film.title);
  })
})