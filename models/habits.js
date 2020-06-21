const mongoose= require('mongoose');//accessing the mongoose library
const habitSchema = new mongoose.Schema({   //setting up the schema for db
    category:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
},{
    timestamps:true
});

const Habit=mongoose.model('Habit',habitSchema);//this is to create the collections we want to store in DB

module.exports = Habit;