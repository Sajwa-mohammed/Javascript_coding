const arr = [2, 7, 11, 15];
const target = 9;

const result = {};

for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (complement in result) {
        console.log([result[complement], i]);
        break;
    }

    result[arr[i]] = i;
}