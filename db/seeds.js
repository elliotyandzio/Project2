const mongoose        = require('mongoose');
mongoose.Promise      = require('bluebird');

const { databaseURI}  = require('../config/environment');
mongoose.connect(databaseURI);

const User =require('../models/user');

User.collection.drop(); //Delete all the records in the db

User.create([{ //Create some seeded data to test the db is working
  name: 'John',
  email: 'john@doe.com',
  password: 'password'
},{
  name: 'Jess',
  email: 'jess@jess.com',
  password: 'password'
}])
  .then(console.log('Records created')) // if successful then console.log records created
  .catch(err => console.log(err)) //if not then print an error message.
  .finally(()=> mongoose.connection.close()); //Close the db connection
