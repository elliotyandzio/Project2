const express = require('express'); //Add express into the application
const app = express(); //Invoking the express module
const PORT = process.env.PORT || 3000; //Connect the app to the port
const expressLayouts = require('express-ejs-layouts'); //Add express layouts to the application
const router = require('./config/router'); // Importing the router so we can access it in this file

app.set('view engine', 'ejs');//Configure express to use ejs
app.set('views', `${__dirname}/views`); //Tells express to look for the template files in views folder.
app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`)); //Create a public folder to hold the static files such as CSS and use side JS

app.get('/', (req, res) => res.render('pages/home')); //Add request listener to set the hompage.

app.use(router); //Telling express to use the router, this must be befoer the app.listen port

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`)); //start the port and console.log to see if it is working
