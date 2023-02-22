const prompt = require('prompt-sync')();

var length = prompt("Enter the Length: "); // length of the rectangle
var width = prompt("Enter the Width: "); // width of the rectangle

var area = length * width;

console.log("The area of the ractangle is : " + area);