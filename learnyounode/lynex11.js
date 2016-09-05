var args = process.argv;
var http = require('http');
var fs = require('fs');

var server = http.createServer(handler);
server.listen(args[2]);



function handler (req, res){

	

	var rs = fs.createReadStream(args[3]);
		
	rs.setEncoding("utf8");

	rs.on('data', function(data){
		res.write(data);
	});

	
	
	

}

