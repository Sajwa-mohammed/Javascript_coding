const arr = [1, [2, 3], [4, [5, 6]], 7];

function flattenArray(arr){
    let result=[]
    arr.forEach(item=>{
        if(Array.isArray(item)){
            result.push(...flattenArray(item));
        } else{
            result.push(item)
        }
    })
return result
}

console.log(flattenArray(arr));
