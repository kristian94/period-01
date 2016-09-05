var args = process.argv;
var path = args[2];
var fs = require('fs');




var buffer = fs.readFile(path, function(err, data){

	if (!err){
		
		var string = data.toString();

		var array = string.split("\n");

		console.log(array.length-1);
	}

});












