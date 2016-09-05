var args = process.argv;
var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;

var printRes = function(){
	results.forEach(function(entry){
		console.log(entry);
	});
};

var httpGet = function(index){
	http.get(args[2+index], function(response){
		response.pipe(bl(function(err, data){

			if(err) console.error(err);
			else{
				results[index] = data.toString();
				count++;

				if(count == 3) printRes();
			}

		}));
	});
};

for(var i = 0; i < 3; i++){
	httpGet(i);
}