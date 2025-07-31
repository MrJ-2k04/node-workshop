
const http = require("http");
const fs = require("fs");

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
    console.log(request);
    
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Accept-Origin", "*");
    res.statusCode = 200;
    res.write("abc");
    res.end();
});

server.listen(8080, () => {
    console.log("Server started on port 8080...");
})
