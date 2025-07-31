
/* Installation Command */
// npm install express
// OR
// npm i express

const express = require('express');
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, 'assets')));

app.listen(PORT, () => console.log(`Express running on http://localhost:${PORT}`));
