var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('<html><body><h1>Welcome to NODE JS</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({
        firstName: "Vijay",
        lastName: "Deepak"
    });
});

app.listen(port);