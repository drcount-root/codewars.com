function nearestSq(n) {
  return Math.round(n ** 0.5) ** 2;
}

// function nearestSq(n) {
//   return Math.pow(Math.round(Math.sqrt(n)), 2);
// }

console.log(nearestSq(56));
console.log(nearestSq(57));
