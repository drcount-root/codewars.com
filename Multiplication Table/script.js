const multiplicationTable = function (size) {
  const M = size;
  const N = size;

  const arr = [];

  for (let i = 0; i < M; i++) {
    arr.push([]);
    for (let j = 0; j < N; j++) {
      arr[i].push((i + 1) * (j + 1));
    }
  }
  return arr;
};

console.log(multiplicationTable(3));
