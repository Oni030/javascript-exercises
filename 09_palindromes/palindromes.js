const palindromes = function (string) {
    let cleanString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let testString = cleanString;

    while (testString.length >= 0){
        if(testString[0] !== testString[testString.length - 1]) {
            return false
        };
        if(testString.length <= 1) {
            return true;
        };
        testString = testString.slice(1, testString.length - 1);
    };
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
