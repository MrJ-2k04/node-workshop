
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "assets", req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not Found");
    } else {
      res.statusCode = 200;
      res.end(data);
    }
  });
});

server.listen(8000, () => console.log("Static server at http://localhost:8000"));
