// npm modules
var express = require('express');
var bodyParser = require('body-parser');
var controllers = require('./serverAssets/mainCtrl.js');
var cors = require('cors');
/*var firebase = require('firebase');*/

var app = express();

// middleware

app.use(cors());
app.use(bodyParser());

app.use(express.static(__dirname + '/public'));

// routes

app.get('/public/test', function (request, response) {

});

app.post('/support/messages', controllers.sendMessage);


app.listen(3000);