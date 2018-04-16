const router = require('express').Router(); //Create an express router
const registrations = require('../controllers/registrations');
const login = require('../controllers/login');
const stadiums = require('../controllers/stadiums');

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
  .get(stadiums.index)
  .post(stadiums.create);

router.route('/stadiums/new')
  .get(stadiums.new);

router.route('/stadiums/:id')
  .get(stadiums.show)
  .delete(stadiums.delete);

module.exports = router; //export the router
