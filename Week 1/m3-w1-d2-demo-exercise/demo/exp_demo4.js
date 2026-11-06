var express = require('express');
var app = express();

app.get('/home', function (req, res) {
    res.send('Hello, World!');
});

app.get('/about/', function (req, res) {
    res.send('This is the about page');
});

app.listen(3000);


