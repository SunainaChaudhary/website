const express= require('express')
const app= express()
const path= require('path')
const hbs = require('hbs')
const mongoose =require('mongoose')
const session= require('express-session')

const passport= require('passport')
const flash= require('connect-flash')

app.use(express.json())
app.use(express.urlencoded({extended: true , useNewUrlParser: true}))
app.use(session({secret:'shh', resave:false, saveUninitialized:false}))

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine' , '.hbs')

app.use('/', require('./routes/index'));

mongoose.connect('mongodb://localhost:27017/shit' , { useNewUrlParser: true });

require('./config/passport')

app.listen(2020, ()=>
{
console.log("running")
})