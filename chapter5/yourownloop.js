// Your code here
function loop(value,condition,updation,display){
  
   
  while(condition(value)==true){
  	display(value);
    value=updation(value);
    
  }
  
  	return 0;
  
	
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1