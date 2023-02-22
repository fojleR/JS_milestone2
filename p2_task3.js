const prompt = require('prompt-sync')();

var first_num = parseInt(prompt("Enter the first Number: "));
var second_num = parseInt(prompt("Enter the second Number: "));

if(first_num < second_num){
    var tm = first_num;
    first_num = second_num;
    second_num = tm;
}
var addition = first_num + second_num;
console.log("The addition of the two numbers is " + (first_num + second_num));

console.log("The subtraction of the two numbers is " + (first_num - second_num));

console.log("The multiplication of the two numbers is " + (first_num * second_num));

console.log("The division of the two numbers is " + (first_num / second_num));



