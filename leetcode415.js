// leetcode problem 415 add 2 string 
//example => Input: num1 = "11", num2 = "123" = Output: "134" 

var addStrings = function(num1,num2) {

    let i = num1.length - 1;
    let j = num2.length - 1;

    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {

        let digit1 = i >= 0 ? num1[i] - '0' : 0;
        let digit2 = j >= 0 ? num2[j] - '0' : 0;

        let sum = digit1 + digit2 + carry;

        result = (sum % 10) + result;

        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return result;
};
console.log (addStrings("34","78"));
console.log (addStrings("65","98"));
