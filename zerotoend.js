const arr=[0,1,0,3,12]
let newarr=[]
let count=0

for (let i = 0; i < arr.length; i++) {
  if(arr[i] === 0){
    count++
    continue
  }
  else{
    newarr.push(arr[i])
  }
    
}
for (let i = 0; i < count; i++) {
    newarr.push(0)
    
}
console.log(newarr);

