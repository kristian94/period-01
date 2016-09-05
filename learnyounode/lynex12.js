var args = process.argv;
var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var server = http.createServer(handler);
server.listen(args[2]);


function handler (req, res) {
	
	if(req.method == 'POST'){
		
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(res);
		
	}
	
}