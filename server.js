var express = require('express');
var quiz = require('./quiz')
var app = express();

app.use('/quiz', quiz);

app.listen(3000,'0.0.0.0', function(){
	console.log('Example app listening on port 3000')
});