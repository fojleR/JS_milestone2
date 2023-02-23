const prompt = require('prompt-sync')();

function addition(f_num, s_num){ //function for summation calculation
    return f_num + s_num;
}

function subtraction(f_num, s_num){ //function for subtraction calculation
    return f_num - s_num;
}

function multiplication(f_num, s_num){ //function for multiplication calculation
    return f_num * s_num;
}

function division(f_num, s_num){ //function for division calculation
    return f_num / s_num;
}



var first_num = parseInt(prompt("Enter the first number: "));
var second_num = parseInt(prompt("Enter the second number: "));

var operator = prompt("Enter the operation that you want to calculate(+, _ , * ,/): ")

if(operator == "+"){
    console.log("The summation is : " + addition(first_num, second_num));
}
else if(operator == "-"){
    console.log("The Subtraction is : " + subtraction(first_num, second_num));
}
else if(operator == "*"){
    console.log("The multiplication is : " + multiplication(first_num, second_num));
}
else if(operator == "/"){
    console.log("The division is : " + division(first_num, second_num));
}
else{
    console.log("Invalid Operation");
}

