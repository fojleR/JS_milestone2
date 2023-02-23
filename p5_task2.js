const prompt = require('prompt-sync')();

var arr = new Array;
var n = parseInt(prompt("Enter the number of string in the array: "));
for(var i = 0; i < n; i++){
    var x;
    x = prompt()
    arr.push(x);
}

var longest_string = arr[0];
var shortest_string = arr[0];

var str = arr[0];

var mxsize = str.length;
var mnsize = str.length;

for(var i = 0; i < n; i++){
    str = arr[i];
    if(str.length > mxsize){
        mxsize = str.length;
        longest_string = arr[i];
    }
    if(str.length < mxsize){
        mnsize = str.length;
        shortest_string = arr[i];
    }
}

console.log("The longest string is: " + longest_string);
console.log("The shortest string is: " + shortest_string);