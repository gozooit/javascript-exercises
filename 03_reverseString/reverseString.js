const reverseString = function(string) {
    const stringArray = string.split("");
    let reversedString = "";
    stringArray.reverse();
    // return stringArray;
    for (pos in stringArray) {
        reversedString = reversedString + stringArray[pos];
    };
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
