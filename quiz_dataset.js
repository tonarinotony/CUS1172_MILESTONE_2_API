const list = {
	list:
	[{
		"quizid": "1",
		"title" : "quiz 1",
		"description" : "One of two available Quizzes"
	},
	{
		"quizid": "2",
		"title" : "quiz 2",
		"description" : "One of two available Quizzes"
	}
	]
}
const quiz = {
	results: [
	{
		"data":{
		"id": 100,
		"question_type" : "mc",
		"question" : "What is 1+1",
		"answer_options" : ["1","2","3","4"]
		},
		"meta" :{
			"next_question": 101
		}
	}
	]
}

module.exports.list = list;
module.exports.quiz = quiz;