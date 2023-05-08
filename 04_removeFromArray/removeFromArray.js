const removeFromArray = function(arr, ...theArgs) {
    arr = arr.filter(arg => !theArgs.includes(arg));
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
