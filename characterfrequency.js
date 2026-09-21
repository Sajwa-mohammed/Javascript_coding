const char="abcabc  ccbaAC"

let result={}

for (let i = 0; i< char.length; i++) {
    const lowchar=char[i].toLowerCase()
    if(lowchar === " "){
        continue;
    }
  else if(lowchar in result){
    result[lowchar]++
  }
  else{
   result[lowchar]=1
  }
    }

console.log(result);
