var mongoose = require('mongoose');

module.exports = function(){
	var connectionUri = 'mongodb://127.0.0.1/seedex';//'mongodb://seedexadmin:seedslayers@ds021915.mlab.com:21915/seedex';
	var db = mongoose.connect(connectionUri);

	require('../app/models/stockist.js');
	require('../app/models/user.js');
	return db
};