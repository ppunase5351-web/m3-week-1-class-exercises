var routerdemo = require('./exp_demo3a.js');
var express = require('express');
var app = express();



//both exp-demo3a.js and exp-demo3b.js are in same directory
app.use('/routerdemo', routerdemo); // to use the router defined in exp_demo3a.js    

app.listen(3000);


