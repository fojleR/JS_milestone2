const prompt = require('prompt-sync')();

var farenheit = parseFloat(prompt("Enter the temperature in fahrenheit: "));

var celcius = parseFloat((5 / 9) * (fahrenheit - 32) );

console.log("The temperature in celcius is : " + celcius);