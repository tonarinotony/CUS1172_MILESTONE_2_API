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
	var ques_id = req.params['questionid'];
	var quiz_id = req.params['quizid'];
	quiz_with_id = quiz_data["results"].filter(q => q.quizId == quiz_id)
	ques_with_id = quiz_data["results"][1].questions.filter(q=>q.data.id == ques_id)
	res.json(ques_with_id)
});

router.get('/check_answer/:quizid/:questionid/:answer', (req,res) => {
	res.send('<h2>answer ID</h2>');
});

module.exports = router