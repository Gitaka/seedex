var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = function(){


	passport.serializeUser(function(user,done){
		done(null,user);
	});

	passport.deserializeUser(function(id,done){
		
		User.findById(id,function(err,user){
			done(err,user);
		});

	});


	require('./strategies/local.js') ();
}