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

function stadiumsNew(req, res){
  res.render('stadiums/new', {error: null});
}

function stadiumsCreate(req, res) {
  console.log(req.body);
  //req.body.user = req.currentUser;

  Stadium
    .create(req.body)
    .then(() => res.redirect('/stadiums'))
    .catch((error) => {
      if (error.name === 'ValidationError'){
        res.badRequest('/stadiums/new', error.toString());
      }
    });
}

function stadiumsDelete (req, res) {
  Stadium
    .findById(req.params.id)
    .exec()
    .then(stadiums => stadiums.remove())
    .then(() => res.redirect('/stadiums'));
}

module.exports = {
  index: stadiumsIndex,
  show: stadiumsShow,
  delete: stadiumsDelete,
  new: stadiumsNew,
  create: stadiumsCreate
};
