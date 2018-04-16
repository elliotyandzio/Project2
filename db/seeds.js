const mongoose        = require('mongoose');
mongoose.Promise      = require('bluebird');

const { databaseURI}  = require('../config/environment');
mongoose.connect(databaseURI);

const Stadium =require('../models/stadium');

Stadium.collection.drop(); //Delete all the records in the db

Stadium.create([{ //Create some seeded data to test the db is working
  name: 'Old Trafford',
  address: 'Sir Matt Busby Way, Stretford, Manchester M16 0RA',
  team: 'Manchester United'
},{
  name: 'Stamford Bridge',
  address: 'Fulham Rd, Fulham, London SW6 1HS',
  team: 'Chelsea'
},{
  name: 'Emirates Stadium',
  address: 'Hornsey Rd, London N7 7AJ',
  team: 'Arsenal'
}])
  .then(console.log('Records created')) // if successful then console.log records created
  .catch(err => console.log(err)) //if not then print an error message.
  .finally(()=> mongoose.connection.close()); //Close the db connection
