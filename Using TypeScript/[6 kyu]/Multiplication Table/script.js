"use strict";
exports.__esModule = true;
exports.multiplicationTable = void 0;
var multiplicationTable = function multiplicationTable(size) {
    var M = size;
    var N = size;
    var matr = [];
    for (var i = 0; i < M; i++) {
        matr.push([]);
        {
            for (var j = 0; j < M; j++) {
                matr[i].push((i + 1) * (j + 1));
            }
        }
    }
    return matr;
};
exports.multiplicationTable = multiplicationTable;
console.log((0, exports.multiplicationTable)(3));
console.log((0, exports.multiplicationTable)(10));
