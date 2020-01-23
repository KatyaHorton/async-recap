const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    if (false) resolve(1);
    reject(new Error("Rejected"));
  }, 1000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 1000);
});

Promise.all([p1, p2])
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

// const p = Promise.resolve({ id: 1 });
// const pRej = Promise.reject(new Error("Rejected Promise Message"));

// p.then(result => console.log("Result: ", result));
// pRej.catch(err => console.log("Error: ", err.message));
