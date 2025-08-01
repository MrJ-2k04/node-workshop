const fs = require('fs');

console.log("1️⃣ Start");

// Simulate a non-blocking task (asynchronous)
fs.readFile(__filename, (err, data) => {
  console.log("3️⃣ Finished reading file asynchronously");
});

// Simulate another non-blocking task (asynchronous)
setTimeout(() => {
  console.log("4️⃣ Timeout callback (asynchronous)");
}, 5); // set different values to see different results (0, 5)

console.log("2️⃣ End");
