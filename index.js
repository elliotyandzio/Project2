const express = require('express'); //Add express into the application
const app = express(); //Invoking the express module
const expressLayouts = require('express-ejs-layouts'); //Add express layouts to the application
const mongoose = require('mongoose'); //Add mongoose into the application
//const Promise = require('bluebird');
const {port, databaseURI} = require('./config/environment');
const routes              = require('./config/router'); // Importing the router so we can access it in this file

mongoose.Promise = Promise; //
mongoose.connect(databaseURI);  //Connect to the database

app.set('view engine', 'ejs');//Configure express to use ejs
app.set('views', `${__dirname}/views`); //Tells express to look for the template files in views folder.
app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`)); //Create a public folder to hold the static files such as CSS and use side JS

app.get('/', (req, res) => res.render('pages/home')); //Add request listener to set the hompage.

app.use(routes); //Telling express to use the router, this must be befoer the app.listen port

app.listen(port, () => console.log(`Up and running on port ${port}`)); //start the port and console.log to see if it is working
