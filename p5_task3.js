const prompt = require('prompt-sync')();


var arr = new Array;
var n = parseInt(prompt("Enter the number of person: "));

for(var i = 0; i < n; i++){  // Here i input the name and age of a person
    var name = prompt("Enter the name: ");
    var age = parseInt(prompt("Enter the age: "));
    arr.push({Name: name, Age: age});
}

var Oldest_person = arr[0].Name; // The name of the oldest person
var Oldest_age = arr[0].Age;  // The age of the oldest Person

for(var i = 1; i < n; i++){  // determination of the oldest person
    if(arr[i].Age > Oldest_age){
        Oldest_age = arr[i].Age;
        Oldest_person = arr[i].Name;
    }
}

console.log("The oldest person is : " + Oldest_person);



