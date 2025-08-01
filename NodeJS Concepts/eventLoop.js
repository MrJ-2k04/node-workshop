const fs = require('fs');

console.log("1️⃣ Start");

// Simulate a blocking task (synchronous)
const data = fs.readFileSync(__filename); // Reading this file
console.log("2️⃣ Finished reading file synchronously");

// Simulate a non-blocking task (asynchronous)
setTimeout(() => {
  console.log("4️⃣ Timeout callback (asynchronous)");
}, 0);

console.log("3️⃣ End");
