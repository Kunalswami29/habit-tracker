const Habit = require('../models/habits'); // to import db

module.exports.home = function(req,res){
  Habit.find({},function(err,habit){ // to find the habit from DB
      if(err){console.log('error in finding the user',err); return;}
      return res.render('home',{   // rendering to the page if found
          title: 'Habit || homepage',
          habit_list: habit
      });
  })  
}