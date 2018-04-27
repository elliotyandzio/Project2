const databaseURI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
const port = process.env.port || 3000;

module.exports ={databaseURI, port};
