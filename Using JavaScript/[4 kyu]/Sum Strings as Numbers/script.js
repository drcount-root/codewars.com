const sumStrings = function (a, b) {
  return BigInt(a) + BigInt(b) + ""; // type coercion
};

console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
