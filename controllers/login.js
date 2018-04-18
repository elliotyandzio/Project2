const User = require('../models/user');

function newRoute(req, res) {
  res.render('authentication/login');
}

function createRoute(req, res) {
  User
    .findOne({email: req.body.email})
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('authentication/login', {message: 'Wrong Credentials'});
      }
      req.session.userId = user.id;
      console.log(req.session);
      res.redirect('/stadiums');
    });
}

function deleteRoute(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute
};
