export const multiplicationTable = function multiplicationTable(
  size: number
): number[][] {
  const M: number = size;
  const N: number = size;
  const matr: number[][] = [];

  for (let i: number = 0; i < M; i++) {
    matr.push([]);
    {
      for (let j: number = 0; j < M; j++) {
        matr[i].push((i + 1) * (j + 1));
      }
    }
  }
  return matr;
};

console.log(multiplicationTable(3));

console.log(multiplicationTable(10));
