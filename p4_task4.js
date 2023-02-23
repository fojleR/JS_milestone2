const prompt = require('prompt-sync')();

function primality(num){
    for(var i = 2; i * i <= num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

var num = parseInt(prompt("Enter the number: "));

if(primality(num)){
    console.log("The number is prime ");
}
else{
    console.log("The number is composite ");
}