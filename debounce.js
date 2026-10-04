function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn(...args)
        },delay)
    }

}

const search=debounce((value)=>{
    console.log("searching for value:",value);
    
},500)

search("r");

setTimeout(() => search("re"), 200);

setTimeout(() => search("rea"), 300);

setTimeout(() => search("react"), 400);