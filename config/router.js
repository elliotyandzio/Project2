const router = require('express').Router(); //Create an express router
const registrations = require('../controllers/registrations');
const login = require('../controllers/login');
router.get('/', (req, res) => res.render('pages/home')); //created homepage route

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(login.new)
  .post(login.create);

router.route('/logout')
  .get(login.delete);
  
module.exports = router; //export the router
