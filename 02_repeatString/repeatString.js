const repeatString = function(string, nbRepeat) {
    if (nbRepeat < 0) {
        return "ERROR";
    }
    let res = "";
    while (nbRepeat > 0) {
        res = res + string;
        nbRepeat--;
    }
    return res;
};

console.log(repeatString("heho", 3));

// Do not edit below this line
module.exports = repeatString;
