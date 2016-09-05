var printFilenamesByExt = function (dir, ext, callback){

	var fs = require("fs");

	fs.readdir(dir, function(err, list){
		
		if(err) {
			callback(err)
			return;		
		}
		var filtered = [];
		list.forEach(function(entry){
			if(entry.indexOf("."+ext) != -1) filtered.push(entry)
		});
		callback(null, filtered);

	});

	
	

};

module.exports = printFilenamesByExt;