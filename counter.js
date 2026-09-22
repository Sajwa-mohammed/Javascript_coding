function createCounter(){
    let count=0;
    return function(){
        count= count+1
        return count;
    }
}

const counter = createCounter();
console.log(counter());
