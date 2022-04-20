const finalGrade = (grade, projects) =>
  grade > 90 || projects > 10
    ? 100
    : grade > 75 && projects > 4
    ? 90
    : grade > 50 && projects > 1
    ? 75
    : 0;

// test cases
console.log(finalGrade(100, 12));
console.log(finalGrade(99, 0));
console.log(finalGrade(10, 15));
console.log(finalGrade(85, 5));
console.log(finalGrade(55, 3));
console.log(finalGrade(55, 0));
console.log(finalGrade(20, 2));
