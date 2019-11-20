function every (array, test) {
  // Your code here.
  for (let items of array) {
    if (test(items) == false) {
      return false
    }
  }
  return true
}

console.log(every([1, 3, 5], n => n < 10))
// → true
console.log(every([2, 4, 16], n => n < 10))
// → false
console.log(every([], n => n < 10))
// → true

// using some

function every (array, test) {
  // Your code here.
  // some will stop if it get a true.so !test(element) will return false for every true till end of array and this false will be converted to true atlast.
  // likewise if we encounter a false case !test(element) will return true and some exit and it is converted to false.
  return !array.some(element => !test(element))
}

console.log(every([1, 3, 5], n => n < 10))
// → true
console.log(every([2, 4, 16], n => n < 10))
// → false
console.log(every([], n => n < 10))
// → true
