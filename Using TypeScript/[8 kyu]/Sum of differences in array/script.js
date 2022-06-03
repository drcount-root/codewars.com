"use strict";
exports.__esModule = true;
exports.sumOfDifferences = void 0;
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max.apply(Math, arr) - Math.min.apply(Math, arr) : 0;
}
exports.sumOfDifferences = sumOfDifferences;
var numArr = [2, 1, 10];
console.log(sumOfDifferences(numArr));
console.log(sumOfDifferences([4, 7, 0, 9, 10, -2]));
