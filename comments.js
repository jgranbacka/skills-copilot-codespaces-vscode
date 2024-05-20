// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// Load comments
var comments = require('./comments.json');

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set up server
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

// Set up routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
