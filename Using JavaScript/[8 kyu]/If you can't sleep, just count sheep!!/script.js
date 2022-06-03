var countSheep = function (num) {
  let statement = "";
  for (let i = 1; i <= num; i++) {
    statement += `${i} sheep...`;
  }
  return statement;
};

console.log(countSheep(3));
