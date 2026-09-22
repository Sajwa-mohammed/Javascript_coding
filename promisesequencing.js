console.log("A");//synchronous

setTimeout(() => {   //mackrotask
    console.log("B");
}, 0);

Promise.resolve().then(() => { //microtask
    console.log("C");

    setTimeout(() => {
        console.log("D");
    }, 0);
});

Promise.resolve().then(() => {
    console.log("E");
});

console.log("F");