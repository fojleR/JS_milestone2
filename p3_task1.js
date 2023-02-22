const prompt = require('prompt-sync')();

var num= parseInt(prompt("Enter the  Number: "));

if(num > 0){
    console.log("The number is positive!");
}
else if(num < 0){
    console.log("The number is negative!");
}
else{
    console.log("The number is zero!!");
}