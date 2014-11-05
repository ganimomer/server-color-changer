'use strict';

var Color = require('./Color.js');
var express = require('express');
var path = require('path');
var config = require('./config.json');
var app = express();

app.use(express.static(path.join(__dirname, '/../public/')));

var serverColor = new Color('#ffffff');

app.get('/get', function(req, res) {
   //console.log('get');
    res.status(200).json(serverColor.hex);
});

app.get('/change', function(req, res) {
    var channel = parseInt(req.query.channel,10);
    var increment = parseInt(req.query.increment,10);
    console.log('change channel',channel,'by',increment);
    serverColor.modC(channel,increment);
    console.log('Server color now:',serverColor);
    res.status(200).json(serverColor.hex);
});

app.listen(config.port, function(){
    console.log('Now listening to http://localhost:' + config.port);
});