const express = require('express'); //Add express into the application
const app = express(); //Invoking the express module
const bodyParser     = require('body-parser');
const expressLayouts = require('express-ejs-layouts'); //Add express layouts to the application
const methodOverride      = require('method-override');
const User                = require('./models/user');
const mongoose = require('mongoose'); //Add mongoose into the application
mongoose.Promise = require('bluebird');
const flash               = require('express-flash');
const session             = require('express-session');
const {port, databaseURI} = require('./config/environment');
const routes              = require('./config/router'); // Importing the router so we can access it in this file
const customResponses     = require('./lib/customResponses');

mongoose.connect(databaseURI);  //Connect to the database

app.set('view engine', 'ejs');//Configure express to use ejs
app.set('views', `${__dirname}/views`); //Tells express to look for the template files in views folder.
app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`)); //Create a public folder to hold the static files such as CSS and use side JS

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body){
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({           // This is cookies
  secret: 'my super secret token',
  resave: false,
  saveUnitialized: false
}));

app.use(flash());
app.use(customResponses);

app.use((req, res, next) =>{
  if(!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .then((user) =>{
      req.session.userId = user._id;
      res.locals.user = user;
      req.currentUser = user;
      res.locals.isLoggedIn = true;
      next();
    });
});

app.use(routes); //Telling express to use the router, this must be befoer the app.listen port

app.listen(port, () => console.log(`Up and running on port ${port}`)); //start the port and console.log to see if it is working
