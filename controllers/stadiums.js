const Stadium = require('../models/stadium');

function stadiumsIndex(req, res){
  Stadium
    .find()
    //.populate('user')
    .exec()
    .then(stadiums => {
      res.render('stadiums/index', {stadiums});
    });
}

function stadiumsShow(req, res){
  Stadium
    .findById(req.params.id)
    //.populate('photos')
    .exec()
    .then(stadiums => res.render('stadiums/show', {stadiums}));
}

module.exports = {
  index: stadiumsIndex,
  show: stadiumsShow
};
