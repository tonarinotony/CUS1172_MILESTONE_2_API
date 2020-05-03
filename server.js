var express = require('express');
var quiz = require('./quiz')
var app = express();

app.use('/quiz', quiz);

app.get('/', function(req,res) { 
	res.send('<h1> Hello Tony Quiz API </h1>')
})
