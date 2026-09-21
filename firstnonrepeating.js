const char="swiss"
let result={}

for (let i = 0; i < char.length; i++) {
    if(char[i] in result){
        result[char[i]]++
    }
    else{
        result[char[i]]=1
    }
    
}

for (let i = 0; i < char.length; i++) {
  if(result[char[i]]===1){
    console.log(char[i]);
    break;  
  }
    
}