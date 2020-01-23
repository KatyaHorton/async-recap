const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("This is result of resolved Promise.");
    }
    reject(new Error("This is error message."));
  }, 2000);
});

p.then(result => {
  console.log("Result: ", result);
}).catch(err => console.log("Error: ", err));
