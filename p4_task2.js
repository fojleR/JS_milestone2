const prompt = require('prompt-sync')();

function reverseString(str){
    var str2 = "";
    var n = str.length;
    for(var i = n - 1; i >= 0; i--){
        str2 += str[i];
    }
    return str2;
}

console.log("The reversed string is: " + reverseString("hello"));