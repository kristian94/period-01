var args = process.argv;
var http = require('http');
var fs = require('fs');
var url = require('url');
var map = require('through2-map');

var server = http.createServer(handler);
server.listen(args[2]);


function handler (req, res) {
	
	var urlObj = url.parse(req.url, true);
	var path = urlObj.pathname;
	res.writeHead(200, { 'Content-Type': 'application/json' })
	
	if(path == '/api/parsetime'){


		res.write(JSON.stringify(toTime(urlObj.query)))
		
		
	}else if(path == '/api/unixtime'){
		
		res.write(JSON.stringify(toUnix(urlObj.query)))
		
	}
	
	res.end()
}

function toTime(data){

	var date = new Date(data.iso);
	
	var object = {}
	
	object.hour = date.getHours()
	object.minute = date.getMinutes()
	object.second = date.getSeconds()

	return object
	
}


function toUnix(data){

	var date = new Date(data.iso)

	var object = {}

	object.unixtime = date.getTime()

	return object

}