
/* Installation Command */
// npm install express
// OR
// npm i express

const express = require('express');
const PORT = 8000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node.js!");
})

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.listen(PORT, () => console.log(`Express running on http://localhost:${PORT}`));
