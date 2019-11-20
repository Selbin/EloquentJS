let size=8;

for(let i=1;i<=8;i++){
  let shape="";
  let count =0;
	if(i%2==0){
      
      while(count<4){shape=shape+"# ";
                     count++;}
    	console.log(shape);
    }else{
  		
  		while(count<4){shape=shape+" #";count++;}
    	console.log(shape);
    }

}