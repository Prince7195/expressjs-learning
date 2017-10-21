var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(
    'mongodb://test:test@ds035776.mlab.com:35776/expressjs'
);

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var vijay = Person({
    firstname: "vijay",
    lastname: "deepak",
    address: "chennai"
});

// save the user
vijay.save(function(err) {
    if(err) throw err;

    console.log('User saved');
});

var prince = Person({
    firstname: "prince",
    lastname: "deepak",
    address: "chilakaluripet"
});

// save the user
prince.save(function(err) {
    if(err) throw err;

    console.log('User saved');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

// using inbuilt express middleware
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// custom middleware
app.use('/', function(req, res, next) {
    console.log(`Requested URL: ${req.url}`);

    // get all the users
    Person.find({}, function(err, users) {
        if(err) throw err;

        // object of all users
        console.log(users);
    });

    next(); // goes to next middleware like app.get()
});

htmlController(app);

apiController(app);

app.listen(port);