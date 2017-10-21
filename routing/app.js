var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

// using inbuilt express middleware
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// custom middleware
app.use('/', function(req, res, next) {
    console.log(`Requested URL: ${req.url}`);
    next(); // goes to next middleware like app.get()
});

htmlController(app);

apiController(app);

app.listen(port);