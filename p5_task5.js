const prompt = require('prompt-sync')();
function upper_case(arr){ // returning the new arry with uppercase string
    var arr2 = new Array;
    for(var i = 0; i < arr.length; i++){
        arr2.push(arr[i].toUpperCase());
    }
    return arr2;
}

var n = parseInt(prompt("Enter the size of the array: "));

console.log("Enter the elements of the array: ");
var arr = new Array;
for(var i = 0; i < n; i++){
    var x = prompt();
    arr.push(x);
}

var new_arr = upper_case(arr);

for(var i = 0; i < new_arr.length; i++){
    console.log(new_arr[i]);
}