const prompt = require('prompt-sync')();

function sum_of_array(arr){
    var sum = 0; 
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

var arr = [1,2,3,4,5,6];

console.log("The sum of the array is: " + sum_of_array(arr));