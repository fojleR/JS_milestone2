const prompt = require('prompt-sync')();

var arr = new Array;
var n = parseInt(prompt("Enter the number of string in the array: "));
for(var i = 0; i < n; i++){
    var x;
    arr.push(x);
}
arr.sort();

var largest = arr[n - 1];
var smallest = arr[0];

console.log("The largest element is : " + largest);
console.log("The smallest element is : " + smallest);