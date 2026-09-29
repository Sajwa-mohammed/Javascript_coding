const string1 = "listen";
const string2 = "sijent";

let result1 = {};
let result2 = {};

if (string1.length !== string2.length) {
    console.log(false);
} else {

    // Count characters in string1
    for (let i = 0; i < string1.length; i++) {
        const char = string1[i].toLowerCase();

        if (char in result1) {
            result1[char]++;
        } else {
            result1[char] = 1;
        }
    }

    // Count characters in string2
    for (let j = 0; j < string2.length; j++) {
        const char = string2[j].toLowerCase();

        if (char in result2) {
            result2[char]++;
        } else {
            result2[char] = 1;
        }
    }

    // Compare character counts
    let isAnagram = true;

    Object.keys(result1).forEach((char) => {
        if (result1[char] !== result2[char]) {
            isAnagram = false;
        }
    });

    console.log(isAnagram);
}