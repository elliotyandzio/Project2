const mongoose        = require('mongoose');
mongoose.Promise      = require('bluebird');

const User =require('../models/user');

User.collection.drop();

User.create([{
  name: 'John',
  email: 'john@doe.com',
  password: 'password'
},{
  name: 'Jess',
  email: 'jess@jess.com',
  password: 'password'
}])

.then(console.log(' Records created'))
.catch(err => console.log(err))
.finally(()=> mongoose.connection.close());
