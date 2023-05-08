const reverseString = function(string) {
    const myArray = string.split("");
    const revArray = myArray.reverse();
    let result = revArray.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
