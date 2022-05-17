const removeFromArray = function(array, ...valuesToRemove) {
    let pos;
    for (let i = 0; i < valuesToRemove.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === valuesToRemove[i]) {
                pos = j;
            };
        };
        if (pos >= 0) {
            array.splice(pos, 1);
        }
    }
    return array;
};

// testArray = ["Banana", "Orange", "Apple", "Mango"];

// console.log(removeFromArray(testArray, "Orange"));

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
