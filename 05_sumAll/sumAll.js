const sumAll = function(n1, n2) {
    if ((n1 < 0) || (n2 < 0) || (typeof(n1) != "number") || (typeof(n2) != "number")) {
        return "ERROR";
    };
    if (n2 < n1) {
        let tmp = n2;
        n2 = n1;
        n1 = tmp;
    };
    let sum = 0;
    for (i = n1; i <= n2; i++) {
        sum += i;
    };
    return sum;
};

console.log(sumAll(1, 5));

// Do not edit below this line
module.exports = sumAll;
