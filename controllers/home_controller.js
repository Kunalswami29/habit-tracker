// to acces from db ;
const Habit = require('../models/habits');
const Progress = require('../models/progress');

// functions to be performed
module.exports.home=function(req,res){
    // getting data from the databse
    Habit.find({},function(err,habit){    //find is also the inbuilt function to find and perform
        if(err){
            console.log('error in fetching the contacts from db')
            return ;
        }
        return  res.render('home',{
            title:"Habit || homepage",
            habit_list: habit
        });

    });
  
};

module.exports.create = function(req,res){
    Habit.create({
        category:req.body.category,
        date:req.body.date
    },function(err,newhabit){
        if(err){
            console.log("error in creating user",err);
            return;
        }
        return res.redirect('back');
    });
};


module.exports.delete=function(req,res){
    let id=req.query.id;
    Habit.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting object from DB')
            return;
        }
        return res.redirect('back') //open the server
    });

    }

module.exports.progress = function(req,res){
   return res.render('progress',{
       title:"Habit || Progress"
   })
}