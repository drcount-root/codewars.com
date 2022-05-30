const sumStr = function (a, b) {
  return String(Number(a) + Number(b));
};

console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));
console.log(sumStr("", ""));
console.log(sumStr("2", ""));
console.log(sumStr("-5", "3"));
