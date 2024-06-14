const removeFromArray = function(array, ...args) {
    console.log(args.length)
    
    let cleanArray = array.filter(function(element) {
        let keep = true;
        for(let i = 0; i < args.length; i++) {
            if(element === args[i]) {
                keep = false;
            };
        };
        return keep;
    });
    return cleanArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
