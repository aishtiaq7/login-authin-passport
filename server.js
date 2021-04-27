console.log('...server.js start here:');

require('dotenv').config()

const hostname =  process.env.HOST;
const database =  process.env.DATABASE;
const port =  process.env.PORT;


console.log(hostname);
