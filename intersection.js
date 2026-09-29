const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4,4, 5, 6, 7];

let result=[];
for(let i=0;i<arr1.length;i++){
    if(arr2.includes(arr1[i])){
        result.push(arr1[i])
    }
}
console.log(result);
