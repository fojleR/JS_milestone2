const prompt = require('prompt-sync')();

function avg_of_array(arr){
    var sum = 0; 
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return avg;
}

var arr = [1,2,3,4,5,6];

console.log("The average of the array is: " + avg_of_array(arr));