const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome to the Home Page</h1>');
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About Us</h1><p>This is the about page.</p>');
    res.end();
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Contact Us</h1><p>Email: contact@example.com</p>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Invalid Request!</h1>');
    res.end();
  }
});

server.listen(5000, () => {
  console.log('The NodeJS server on port 5000 is now running....');
});