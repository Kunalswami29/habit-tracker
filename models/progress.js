const mongoose = require('mongoose');
const progresSchema = new mongoose.Schema({
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Habit'
    },
    staus:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Progress = mongoose.model('Progress',progresSchema);

module.exports = Progress;
