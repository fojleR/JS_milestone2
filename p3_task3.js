const prompt = require('prompt-sync')();

var  age = parseInt(prompt("Enter your current age: "));

if(age >= 18){
    console.log("You can vote!");
}
else{
    console.log("You are not enough to vote");
}