const prompt = require('prompt-sync')();

function sum(first_num, second_num){
    return first_num + second_num;
}

var first_num = parseInt(prompt("Enter the first Number: "));
var second_num = parseInt(prompt("Enter the second Number: "));

console.log("The summation of two number is: " + sum(first_num, second_num));