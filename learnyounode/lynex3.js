var args = process.argv;
var path = args[2];
var fs = require('fs');

var buffer = fs.readFileSync(path);

var string = buffer.toString();

var array = string.split("\n");

console.log(array.length-1);