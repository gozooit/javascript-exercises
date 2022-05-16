const removeFromArray = function(array, ...valuesToRemove) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valuesToRemove) {
            pos1 = i;
        };
    };
    if (pos1) {
        array.splice(pos1, 1);
    }
    return array;
};

// testArray = ["Banana", "Orange", "Apple", "Mango"];

// console.log(removeFromArray(testArray, "Orange"));

console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));

// Do not edit below this line
module.exports = removeFromArray;
