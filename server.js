var express = require('express');
var quiz = require('./quiz')
var app = express();

app.use('/quiz', quiz);
