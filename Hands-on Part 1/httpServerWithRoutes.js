
const http = require('http');

const server = http.createServer((req, res) => {

    // Route handling
    if (req.url === '/' && req.method === 'GET') {
        res.end('Home Page');
    }
    else if (req.url === '/about' && req.method === 'GET') {
        res.end('About Page');
    }
    else if (req.url === '/contact' && req.method === 'GET') {
        res.end('Contact Page');
    }
    else {
        // Handle 404
        res.writeHead(404);
        res.end('Page Not Found');
    }
});

server.listen(8000, () => console.log("Server running on http://localhost:8000"));
