exports.render = function(req,res){
	res.render('index',{
	   title:'seedex'
	});
}

exports.register = function(req,res,next){
	res.render('register',{
		title:'register'
	});
}

exports.signin = function(req,res){
	res.render('signin',{
	   title:'seedex'
	});
}