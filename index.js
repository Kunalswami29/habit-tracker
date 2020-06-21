const express = require('express');  // this is to import the expresss lib
const port = 8000;                    // setting the port 
const path = require('path'); //to set the path
const db = require('./config/mongoose');  // this is to import mongoose lib
const Habit = require('./models/habits');// to import the modelschema
const expressLayouts= require('express-ejs-layouts');  // this is to import th layouts
const app = express();            // initializing the app
app.set('view engine','ejs'); // to set the template engine
app.set('views','./views');   // to set the path to directory

app.use(expressLayouts); //this is to initalise app t0 use ejs
app.use(express.urlencoded()); // this is to add paresar to file

// this is to set the script and style for layouts
app.set('layout extractStyles',true);
app.set('layout extractScript',true);


app.use(express.static('./assets')); // to use the assets


app.use('/',require('./router')); // to set the route

app.listen(port,function(err){          //when server is up
    if(err){
        console.log(`Error in setting up server:${err}`);
        return;
    }
    console.log(`server set up successfully on port:${port}`);

});