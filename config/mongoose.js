const mongoose = require('mongoose'); // to import the libraray
mongoose.connect('mongodb://localhost/habit_tracker-development');
const db =mongoose.connection; // to set the connection

db.on('error',console.error.bind(console,"error in seting up the db"));

db.once('open', function(){  // once db is setup
    console.log("mongosse DB setup successfully");
});
module.exports = db;  // to export the Db