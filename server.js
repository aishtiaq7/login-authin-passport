console.log('...server.js started here:');

require('dotenv').config()
const bcrypt = require('bcrypt');

//.env Credentials
const hostname =  process.env.HOST;
const database =  process.env.DATABASE;
const port =  process.env.PORT;

///Start with express
const express = require('express')
const app = express(); 

app.set('view-engine', 'ejs');

app.use(express.urlencoded({ extended:false}));

//Get --> Server "GETTING" information
app.get('/', (req,res)=>{
    console.log('\tget(/)')
    res.render('index.ejs', { name:'Awshaf'}); 
}) 
app.get('/register', (req,res)=>{
    console.log('\tget(/register)')
    res.render('register.ejs'); 
}) 
app.get('/login', (req,res)=>{
    console.log('\tget(/login)')
    res.render('login.ejs'); 
}) 


const saltRounds = 10;
var users = [];
//Post --> Server "SENDING" information
app.post('/register', async (req,res)=>{
    console.log('\tpost(/register)') 
    try{
        console.log('inside try block');
        const hashedPassword = await bcrypt.hash(req.body.name, saltRounds);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        //Then direct to login page:
        res.redirect( '/login');
        console.log( users);
    } catch{
        console.log('error in registration. redirecting to registration page again');
        res.redirect('/login')
    }
});
app.post('/login', (req,res)=>{
});



app.listen(3000);

console.log('...end line');