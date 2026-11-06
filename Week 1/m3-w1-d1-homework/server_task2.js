const http = require('http');
const fs = require('fs');
const path = require('path');

// Reads an HTML file and sends it back with a header and data
function serveFile(res, fileName, statusCode = 200) {
  fs.readFile(path.join(__dirname, fileName), (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error: could not read ' + fileName);
      return;
    }
    res.writeHead(statusCode, { 'Content-Type': 'text/html' }); // header
    res.write(data);                                     // data
    res.end();
  });
}

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/' || url === '/home') {
    serveFile(res, 'pages/home.html');
  } else if (url === '/about') {
    serveFile(res, 'pages/about.html');
  } else if (url === '/contact') {
    serveFile(res, 'pages/contact.html');
  } else {
    serveFile(res, 'pages/invalid.html', 404);
  }
});

server.listen(5000, () => {
  console.log('The NodeJS server on port 5000 is now running....');
});