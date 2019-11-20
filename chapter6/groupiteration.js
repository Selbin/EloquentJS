// Your code here (and the code from the previous exercise)
class groupIterator{
  constructor(array){
    this.i=0;
 	this.arr= array;
  }
  next(){

    if(this.i==this.arr.count) return { done: true };
    let value= this.arr.grp[this.i];
    this.i++
  	return {value, done: false};
  }
	
}
Group.prototype[Symbol.iterator]= function(){
  return new groupIterator(this);
};
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c