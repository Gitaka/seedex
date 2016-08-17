var passport = require('passport');
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;


var User = mongoose.model('User');

module.exports = function(){
passport.use('local',new LocalStrategy(function(name,password,done){
    User.findOne({name:name},function(err,user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null,false,{message:'Incorect Username.'});
        }
        if(!user.validPassword(password)){
            return done(null,false,{message:'Invalid Password.'});
        }

        return done(null,user);
    });

  }));
}