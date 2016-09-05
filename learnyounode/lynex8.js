var args = process.argv;
var http = require('http');
var bl = require('bl');

http.get(args[2], function(response){
	
	response.pipe(bl(function(err, data){
		
		if(err) console.error(err);
		else {
				console.log(data.length.toString());
				console.log(data.toString());
			}
	}));
	
});
