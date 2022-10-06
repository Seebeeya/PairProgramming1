//create a function called gcdTwoNumbers
//gave it parameters of a & b

function gcdTwoNumbers(a, b) {
    if(b === 0) { // if b is equal to 0 then it will log the value of a
        return a;
    }
    return gcdTwoNumbers(b, a % b) //Euclidean algorithm
}
console.log(gcdTwoNumbers(100, 10))