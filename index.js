const express = require('express');  // this is to import the expresss lib
const port = 8000;                    // setting the port 
const app = express();              // initializing the app











app.use('/',require('./router')); // to set the route

app.listen(port,function(err){
    if(err){
        console.log(`Error in setting up server:${err}`);
        return;
    }
    console.log(`server set up successfully on port:${port}`);

});