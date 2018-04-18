const router = require('express').Router(); //Create an express router
const registrations = require('../controllers/registrations');
const login = require('../controllers/login');
const stadiums = require('../controllers/stadiums');

function secureRoute(req, res, next){
  if(!req.session.userId){
    return req.session.regenerate(() =>{
      req.flash('danger', 'You must be logged in');
      res.redirect('/');
    });
  }
  return next();
}

router.get('/', (req, res) => res.render('pages/home')); //created homepage route

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(login.new)
  .post(login.create);

router.route('/logout')
  .get(login.delete);

router.route('/stadiums')
  .get(secureRoute, stadiums.index)
  .post(secureRoute, stadiums.create);

router.route('/stadiums/new')
  .get(secureRoute, stadiums.new);

router.route('/stadiums/:id')
  .get(secureRoute, stadiums.show)
  .delete(secureRoute, stadiums.delete)
  .put(secureRoute, stadiums.update);

router.route('/stadiums/:id/edit')
  .get(secureRoute, stadiums.edit);

router.route('/stadiums/:id/comments')
  .post(stadiums.createComment);

router.route('/stadiums/:id/comments/:commentId')
  .delete(stadiums.deleteComment);

module.exports = router; //export the router
