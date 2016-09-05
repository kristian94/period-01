var args = process.argv;

var index = 2;
var sum = 0;


while(index < args.length){
    
    sum = sum + Number(args[index]);
    index++;



}

console.log(sum);