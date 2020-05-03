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
	let i = quiz_data["results"].findIndex(q => q.quizId == quiz_id)
	ques_with_id = quiz_data["results"][i].questions.filter(q=>q.data.id == ques_id)
	res.json(ques_with_id)
});

router.get('/check_answer/:quizid/:questionid/:answer', (req,res) => {
	var ques_id = req.params['questionid'];
	var quiz_id = req.params['quizid'];
	var user_answer = req.params['answer']
	let i = quiz_data["results"].findIndex(q => q.quizId == quiz_id)
	ques_with_id = quiz_data["results"][i].questions.filter(q=>q.data.id == ques_id)
	if(ques_with_id[0].data.answer == user_answer){
		var results = {
			"question_id" : ques_id,
			"user_answer" : user_answer,
			"correct" : true
		}
		res.json(results)
	}
	else{
		var results = {
			"question_id" : ques_id,
			"user_answer" : user_answer,
			"correct" : false,
			"feedback" : ques_with_id[0].data.help
		}
		res.json(results)
	}
});

module.exports = router