const reverseString = function(string) {
    let reverseString = '';
    for(let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString;
};

console.log(reverseString("Hello!"));

// Do not edit below this line
module.exports = reverseString;
