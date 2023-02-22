const prompt = require('prompt-sync')();

var first_num = parseInt(prompt("Enter the first Number: "));
var second_num = parseInt(prompt("Enter the second Number: "));

if(first_num > second_num){
    console.log(first_num + " is  larger than "+ second_num);
}
else if(second_num > first_num){
    console.log(second_num + " is  larger than "+ first_num); 
}
else{
    console.log("The numbers are equal");
}