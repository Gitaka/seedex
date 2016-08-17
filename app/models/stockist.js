var mongoose = require('mongoose');
    Schema = mongoose.Schema;

    var StockistSchema = new mongoose.Schema({
        name: {
			type: String,
			unique: true
		},
		locations:[
         {   
         	name:String,
         	longitude:Number,
         	latitude:Number,
         }
		],

		dateCreated: { type: Date, default: Date.now }
    });

mongoose.model('Stockist',StockistSchema);
var Stockist = mongoose.model('Stockist');