const prompt = require('prompt-sync')();

var first_num = parseInt(prompt("Enter the first Number: "));
var second_num = parseInt(prompt("Enter the second Number: "));
var third_num = parseInt(prompt("Enter the third number: "));

if(first_num < second_num){
    var tm = first_num;
    first_num = second_num;
    second_num = tm;
}
if(first_num < third_num){
    var  tm = first_num;
    first_num = third_num;
    third_num = tm;
}

if(first_num * first_num == (second_num * second_num + third_num * third_num)){
    console.log("The numbers are Pythagorean triple");
}
else{
    console.log("The numbers are not Pythagorean triple");
}


