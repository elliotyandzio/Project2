const User = require('../models/user');

function newRoute(req, res) {
  res.render('authentication/register');
}

function createRoute(req, res){
  User
    .create(req.body)
    .then(() => {
      return res.redirect('/login');
    })
    .catch((err) => {
      if(err.name === 'ValidationError'){
        return res.status(400).render('registrations/index', {message: err.toString()});
      }
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
