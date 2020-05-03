var express = require('express');
const data = require('./quiz_dataset')
const router = express.Router()

router.get('/list', (req,res) => {
	res.json(data.list)
});

router.get('/:quizid', (req,res) => {
	res.json(data.quiz)
});

router.get('/:quizid/:questionid', (req,res) => {
	res.send('<h2>questionid ID</h2>');
});

router.get('/check_answer/:quizid/:questionid/:answer', (req,res) => {
	res.send('<h2>questionid ID</h2>');
});

module.exports = router