export const sumStrings = function sumStrings(a: string, b: string): string {
  return +a + +b + ""; // if a = "456667" then +a = 456667
};

console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);

console.log(
  typeof sumStrings("712569312664357328695151392", "8100824045303269669937")
);
