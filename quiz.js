var express = require('express');
const data = require('./quiz_dataset')
const router = express.Router()
const quiz_data = data.quiz

router.get('/list', (req,res) => {
	res.json(data.list)
});

router.get('/:quizid', (req,res) => {
	var q_id = req.params['quizid'];
	quiz_with_id = quiz_data["results"].filter(q => q.quizId == q_id)
	res.json(quiz_with_id)
});

router.get('/:quizid/:questionid', (req,res) => {
	res.send('<h2>questionid ID</h2>');
});

router.get('/check_answer/:quizid/:questionid/:answer', (req,res) => {
	res.send('<h2>answer ID</h2>');
});

module.exports = router