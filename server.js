console.log('...server.js started here:');

require('dotenv').config()

const hostname =  process.env.HOST;
const database =  process.env.DATABASE;
const port =  process.env.PORT;

///Start with express
const express = require('express')

const app = express();

app.set('view-engine', 'ejs');


//Sets up render response for local host
app.get('/', (req,res)=>{
    // console.log('res', res)
    res.render('index.ejs', { name:'Awshaf'}); 
})

app.listen(3000);

console.log('...end line');