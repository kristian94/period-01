var args = process.argv;
var net = require('net');



var server = net.createServer(listener);
server.listen(args[2]);


function listener(socket){

	socket.write(getDateTime() + '\n');
	socket.end();

}




function getDateTime(){

	var date = new Date();	

	var dateTime = "";
	dateTime += date.getFullYear();
	dateTime += '-';
	var month = date.getMonth()+1;
	if(month.toString().length == 1){
		dateTime += ('0' + month);
	}else{
		dateTime += month;
	}
	dateTime += '-';
	dateTime += date.getDate();
	dateTime += ' ';
	dateTime += date.getHours();
	dateTime += ':';
	dateTime += date.getMinutes();
	
	return dateTime;
};

