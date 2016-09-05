var args = process.argv;
var module1 = require("./lynex6module1.js");
var dir = args[2];
var ext = args[3];


var callback = function(err, list, ext){
	
	if(err) return;
	else{
		list.forEach(function(entry){
			console.log(entry);
		});
	}
}


module1(dir, ext, callback);