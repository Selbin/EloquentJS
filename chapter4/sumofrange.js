// Your code here
function range(start,end,step=1){
  let result=[];
	if(start<end && step>=1){
    	while(start<=end){
        	
          	result.push(start);
          start=start+step;
        }
    	return result;  
    }else if(start>end && step < 1){
    	while(start>=end){
        	
          	result.push(start);
          start=start+step;
        }
      return result;
    }
  else{
  	return "Invalid range";
  }
}
function sum(arr){
  if(typeof(arr)== "object"){
  	let sum=0;
	for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
    }
  return sum;
  }
  else{return "invalid range"}
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55