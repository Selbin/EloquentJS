class Group {
  // Your code here.
  constructor(){
    this.grp=[];
    this.count=0;
  }
  add(num){
    if(this.grp.indexOf(num)==-1){
    this.grp[this.count]=num;
    this.count++;
    }
  }
  delete(x){
    let loc=this.grp.indexOf(x);
    if(loc!= -1){
      for(let i=loc;i<this.count-1;i++){
          this.grp[i]= this.grp[i+1];
          
        }
      this.count--;
      this.grp.length=this.count;
    }
  }
  has(x){
    let loc=this.grp.indexOf(x);
    if(loc != -1){
      return true;
    }
    return false;
    
  }
  static from(arr){ 
      let group=new Group();
    let x=arr[0];
      let y=arr[1];
    for(let i=x;i<=y;i++){
      group.add(i);
      
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
console.log(group.grp);
console.log(group.count);