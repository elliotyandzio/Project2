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

module.exports = {
  index: stadiumsIndex
};
