const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

let sum = 0;

for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
}

let maxsum = sum;

for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];

    maxsum = Math.max(maxsum, sum);
}

console.log(maxsum);