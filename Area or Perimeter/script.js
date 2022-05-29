const areaOrPerimeter = function (l, w) {
  // Return your answer
  return l === w ? l ** 2 : 2 * (l + w);
};

console.log(areaOrPerimeter(6, 10));
console.log(areaOrPerimeter(3, 3));
