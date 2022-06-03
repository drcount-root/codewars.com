function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

const numArr = [2, 1, 10];
console.log(sumOfDifferences(numArr));
console.log(sumOfDifferences([4, 7, 0, 9, 10, -2]));
