var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('<h1>HELLOWORLD</h1>');
});

app.get('/login', (req,res) => {
	res.send('<h2>login</h2>');
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000')
});