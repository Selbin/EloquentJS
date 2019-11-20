let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((x,y)=>{return x.concat(y);}))
// → [1, 2, 3, 4, 5, 6]