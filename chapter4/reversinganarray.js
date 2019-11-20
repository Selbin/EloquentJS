// Your code here.
function reverseArray(arr){
	let result=[];
  for(let i=arr.length-1;i>=0;i--){
  result.push(arr[i]);
  }
  return result;
}
function reverseArrayInPlace(arr) {
  for (var i = 0; i <Math.floor((arr.length / 2)); i++) {
      let back = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = back;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]