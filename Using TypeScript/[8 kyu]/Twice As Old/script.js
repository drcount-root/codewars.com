"use strict";
exports.__esModule = true;
exports.twiceAsOld = void 0;
function twiceAsOld(dadYearsOld, sonYearsOld) {
    var theResultYear = Math.abs(2 * sonYearsOld - dadYearsOld);
    return theResultYear;
}
exports.twiceAsOld = twiceAsOld;
console.log(twiceAsOld(36, 7));
