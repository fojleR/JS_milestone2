const prompt = require('prompt-sync')();
function even_numbers(arr){ // returning the new arry with even numbers
    var arr2 = new Array;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

var n = parseInt(prompt("Enter the size of the array: "));

console.log("Enter the elements of the array: ");
var arr = new Array;
for(var i = 0; i < n; i++){
    var x = parseInt(prompt());
    arr.push(x);
}

var new_arr = even_numbers(arr);

for(var i = 0; i < new_arr.length; i++){
    console.log(new_arr[i]);
}