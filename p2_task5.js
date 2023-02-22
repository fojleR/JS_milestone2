const prompt = require('prompt-sync')();

var num = parseInt(prompt("Enter the number: "));

if(num % 2){
    console.log("The number is odd!");
}
else{
    console.log("The number is even!")
}



