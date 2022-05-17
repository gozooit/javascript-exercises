const palindromes = function (str) {
    str = str.toLowerCase();
    strArray = str.split("");
    const cleanArray = clearArray(strArray);
    let last = cleanArray.length - 1;
    for (let i = 0; i < cleanArray.length; i++) {
        if (!(cleanArray[i] === cleanArray[last])) {
            return false;
        }
        last--;
    }
    return true;
};

const clearArray = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i].match(/[a-z]/i)) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

// Do not edit below this line
module.exports = palindromes;
