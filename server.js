var express = require('express');
var quiz = require('./quiz')
var app = express();

app.use('/quiz', quiz);

app.get('/', function(req,res) { 
	res.send('<h1> Hello Tony Quiz API </h1>')
})

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log('Example app listening on port 3000')
});