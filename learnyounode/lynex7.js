var args = process.argv;
const http = require('http');


http.get(args[2], function(response){
	
	response.setEncoding("utf8");

	response.on("data", function(data){
		console.log(data);
	})

})