const substring="abcabcbb"
let currentstring=""
let maxLength=0;
let longestString="";
for (let i = 0; i < substring.length; i++) {
    const char=substring[i]
   while(currentstring.includes(char)){
        currentstring = currentstring.slice(1);
        
   }
   currentstring = currentstring + char;
   if (currentstring.length > longestString.length) {
    longestString = currentstring;
}
      maxLength= Math.max(maxLength, currentstring.length)
    
}
console.log(longestString);
console.log(maxLength);

