var dir = process.argv[2];
var ext = process.argv[3];
var fs = require("fs");





fs.readdir(dir, function(err, list){

	if (!err){

		list.forEach(function(entry){
				
			if(entry.indexOf(ext) > 0){
				console.log(entry);
			}
		})
			
			
		
	}

});
