var index = require('../controllers/index.js');
var stockist = require('../controllers/stockist.js');
var user = require('../controllers/user.js');
var passport = require('passport');

module.exports = function(app){

	app.post('/register',user.register);
    app.post('/authenticate',user.auth); 
    app.get('/user',ensureAuthorized,user.user);
   

}

/*
  request headers are intercepted and the authorize headers is extracted,
  If a bearer token exists in this header, that token is assigned to req.token in order to be used throughout the request, and the request can be continued by using next(). If a token does not exist, 
  you will get a 403 (Forbidden) response

*/
ensureAuthorized = function(req,res,next){
	var bearerToken;
	var bearerHeader = req.headers['authorization'];

	if(typeof bearerHeader !== 'undefined'){
		var bearer = bearerHeader.split(" ");
		bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	}else{
 
        res.status(403).send("forbidden");
	}
}