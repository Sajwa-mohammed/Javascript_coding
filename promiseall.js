const promises = [
    Promise.resolve(1),
   Promise.reject("Something went wrong"),
    Promise.resolve(3)
];

function promiseall(promises){
    return new Promise((resolve, reject) => {

        const results = [];
        let completed = 0;

        for (let i = 0; i < promises.length; i++) {
            promises[i].then((value) => {
                results[i] = value;
                completed++;

                if (completed === promises.length) {
                    resolve(results);
                }

            }).catch((error) => {
                reject(error);
            });
        }
    });
}

promiseall(promises).then((result) => {
    console.log(result);
});