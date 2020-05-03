var express = require('express');
var quiz = require('./quiz')
var app = express();

app.use('/quiz', quiz);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req,res) { 
	res.send('<h1> Hello Tony Quiz API </h1>')
})

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log('Example app listening on port 3000')
});

