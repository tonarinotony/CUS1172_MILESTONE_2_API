const list = {
	list:
	[{
		"quizId": "1",
		"title" : "quiz 1",
		"description" : "One of two available Quizzes"
	},
	{
		"quizId": "2",
		"title" : "quiz 2",
		"description" : "One of two available Quizzes"
	}
	]
}
const quiz = {
	results: [{
		"quizId": 1,
		"questions":[
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
			},
			{
				"data":{
				"id": 101,
				"question_type" : "mc",
				"question" : "What is 1+1",
				"answer_options" : ["1","2","3","5"]
				},
				"meta" :{
					"next_question": 102
				}
			}
		]
	},
	{
		"quizId": 2,
		"questions":[
			{
				"data":{
				"id": 200,
				"question_type" : "mc",
				"question" : "What is 1+1",
				"answer_options" : ["1","2","3","4"]
				},
				"meta" :{
					"next_question": 201
				}
			},
			{
				"data":{
				"id": 201,
				"question_type" : "mc",
				"question" : "What is 1+1",
				"answer_options" : ["1","2","3","5"]
				},
				"meta" :{
					"next_question": 202
				}
			}
		]
	}

	]
}

module.exports.list = list;
module.exports.quiz = quiz;