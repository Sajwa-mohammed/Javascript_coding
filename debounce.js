function debounce(fn,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn();
        },delay)
    }
}

const search=debounce(()=>{
    console.log("API call");
    
},500);

setTimeout(() => {
    search();
}, 800);

search();
search();
search();
search();