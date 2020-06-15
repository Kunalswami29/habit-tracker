const mongoose = require('mongoose'); // to import mongoose
const habitSchema = new mongoose.Schema({  // to structure the schema
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const Habit = mongoose.models('Habit',habitSchema); // to set the schema
module.exports=Habit; // to export schema
