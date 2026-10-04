const arr=[1, 2, 2,3, 3,3, 4, 4, 5]
let duplicateNumber=[]
let uniqueNumber=[]

for(let i=0;i<arr.length;i++){
    if(uniqueNumber.includes(arr[i])){
        if (!duplicateNumber.includes(arr[i])) {
            duplicateNumber.push(arr[i])
        }
    }
    else{
     uniqueNumber.push(arr[i])   
    }

}

console.log(duplicateNumber);
