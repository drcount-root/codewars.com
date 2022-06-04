export const sumStrings = function sumStrings(a: string, b: string): string {
  return BigInt(a) + BigInt(b) + "";
};

console.log(sumStrings("1", "2"));
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
