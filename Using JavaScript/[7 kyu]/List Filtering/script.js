function filter_list(arr) {
  // Return a new array with the strings filtered out
  return arr.filter(function (e) {
    // return typeof e !== 'string';
    return typeof e === "number";
  });
}

const test_Arr1 = [1, 2, "aasf", "1", "123", 123];
console.log(filter_list(test_Arr1));
const test_Arr2 = [1, "a", -4, "b", 0, 9, -15];
console.log(filter_list(test_Arr2));
