const router = require('express').Router(); //Create an express router
const registrations = require('../controllers/registrations');
router.get('/', (req, res) => res.render('pages/home')); //created homepage route

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.get('/login', (req, res) => res.render('authentication/login')); //created login route
//router.get('/register', (req, res) => res.render('authentication/register')); //created register route



module.exports = router; //export the router
