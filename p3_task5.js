const prompt = require('prompt-sync')();

var grade = prompt("Enter your grade: ");

if(grade == "A+"){
    console.log("Your grade point is 5.00");
}
else if(grade == "A"){
    console.log("Your grade point is 4.00");
}
else if(grade == "A-"){
    console.log("Your grade point is 3.5");
}
else if(grade == "B"){
    console.log("Your grade point is 3");
}
else if(grade == "C"){
    console.log("Your grade point is 2");
}
else if(grade == "D"){
    console.log("Your grade point is 1");
}
else if(grade == "F"){
    console.log("Your grade point is 0");
}
else{
    console.log("Invalid");
}