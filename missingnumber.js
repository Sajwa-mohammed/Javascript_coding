const arr=[1,2,3,5]
const n=arr.length+1
const sumN=(n*(n+1)/2)
let actualsum=0
for(let i=0;i<arr.length;i++){
    actualsum=actualsum+arr[i]
}
const missingNumber=sumN - actualsum
console.log(missingNumber);


