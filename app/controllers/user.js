var User = require('mongoose').model('User');
    jwt = require('jsonwebtoken');

exports.register = function(req,res,next){

    User.findOne({email:req.body.email,password:req.body.password},function(err,user){
    	if(err){
    		res.json({
    			type:false,
    			data:"Error Occured:" + err
    		});
    	}else{
    		if(user){
    			res.json({
    				type:false,
    				data:"User Already Exists",
    				token:user.token
    			});
    		}else{
                  
                   var userModel = new User();

                   userModel.name = req.body.name;
                   userModel.email = req.body.email;
                   userModel.password = req.body.password;

                   userModel.save(function(err,user){
                   	 user.token = jwt.sign(user,process.env.JWT_SECRET);
                   	 user.save(function(err,user1){
                   	 	res.json({
                   	 		type:true,
                   	 		data:user1,
                   	 		token:user1.token
                   	 	});
                   	 });
                   });
             
    		}
    	}
    });
}

exports.auth = function(req,res,next){
  User.findOne({email:req.body.email,password:req.body.password},function(err,user){
  	 if(err){
  	 	res.json({
  	 		type:false,
  	 		data:"Error Occured" + err,
  	 	});
  	 }
     if(!user){
     	 res.json({
  	 		type:false,
  	 		data:"Authentication Failure User not found" ,
  	 	});
     }
  	
    	if(user){ 
        		res.json({
        			type:true,
        			data:user,
        			token:user.token
        		});
     
  	 	}
  	 
  });
}

exports.user = function(req,res,next){
	User.findOne({token:req.token},function(err,user){
		if(err){
		    res.json({
  	 		    type:false,
  	 		    data:"Error Occured" + err,
  	 	    });
		}else{
	     	res.json({
  	 		  type:true,
  	 		  data:user
  	 	   });
		}
	});
}