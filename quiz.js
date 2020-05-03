var express = require('express');

const router = express.Router()

router.get('/list', (req,res) => {
	res.send('<h2>quiz list</h2>');
});

router.get('/:quizid', (req,res) => {
	res.send('<h2>quiz ID</h2>');
});

router.get('/:quizid/:questionid', (req,res) => {
	res.send('<h2>questionid ID</h2>');
});

module.exports = router