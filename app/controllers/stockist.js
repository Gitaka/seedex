var Stockist = require('mongoose').model('Stockist');

exports.show = function(req,res,next){
	Stockist.find(function(err,stockist){
		if(err){
			console.log(err);
		}else{
			console.log(stockist);
		}
	});
}

exports.add = function(req,res,next){
  var stockist=new Stockist({
    name:"mfarm",
    location:[
    {
      name:"kitale",
      longitude:"122343",
      latitude:"0987"
  }
    ],
	dateCreated:Date.now()
	});
	
  stockist.save(function(err,stockist){
    if(err) {
    	return console.error(err);
    }else{
    	console.log(stockist);
    	  return res.redirect('/');
    }
  });

}