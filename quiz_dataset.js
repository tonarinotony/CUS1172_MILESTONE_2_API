const list = {
	list:
	[{
		"quizId": 1,
		"title" : "quiz 1",
		"description" : "One of two available Quizzes"
	},
	{
		"quizId": 2,
		"title" : "quiz 2",
		"description" : "One of two available Quizzes"
	}
	]
}
const quiz = {
	results: [{
		"quizId": 1,
		"title" : "quiz 1",
		"description" : "One of two available Quizzes",
		"questions":
		[
			{
				"data":{
					"id" : 100,
					"question": "Which of these is proper form of INLINE CSS Styling",
					"question_type":"imageMC",
					"help": "inline styling, is when you style directly on the HTML element, Don't use it too often, it isn't very flexible and clutters your code",
					"answer" : 0,
					"answer_options": ["https://tonarinotony.github.io/questionJSON/answer_optionsTYLE1.PNG","https://tonarinotony.github.io/questionJSON/answer_optionsTYLE2.PNG","https://tonarinotony.github.io/questionJSON/answer_optionsTYLE3.PNG","https://tonarinotony.github.io/questionJSON/answer_optionsTYLE4.PNG"]
				}
				"meta"{
					"next_question" : 101
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What goes in ---1---",
					"question_type":"mc",
					"help": "!DOCquestion_type is a document question_type declaration and !DOCquestion_type html informs the browser you will be using HTML5",
					"picture": "https://tonarinotony.github.io/questionJSON/question1.PNG",
					"answer" : 0,
					"answer_options": [{
							"text": "!DOCquestion_type html",
							"correct": "true"
						},
						{
							"text": "DOC-question_type html",							
						},
						{
							"text": "!DOCquestion_type HTML",						
						},
						{
							"text": "DOCquestion_type html",							
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What does JSON stand for",
					"question_type":"mc",
					"help": "The correct answer is Java Script Object Notation",
					"picture":"",
					"answer_options": [{
							"text": "Java Script Online Notation",
							
						},
						{
							"text": "Java Script Original Notation",
							
						},
						{
							"text": "Jawa Stars On Naboo",
							
						},
						{
							"text": "Java Script Object Notation",
							"correct": "true"
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "How many heading tags are there in HTML",
					"help": "There are 6, 1 being the largest, 6 being the smallest",
					"question_type":"fillIn",
					"answer" : "6"
				}
			},
			{	"data":{
					"id" : 100,
					"question": "<--1--> What is the tag to create a line break in HTML(Just fill in do not use <>)",
					"help": "br, or <br>",
					"question_type":"fillIn",
					"answer" : "br"
				}
			},
			{	"data":{
					"id" : 100,
					"question": "<--1--> What is the tag for paragraphs in HTML",
					"help": "p, or <p>",
					"question_type":"fillIn",
					"answer" : "p"
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "<--1--> What is the tag for an unordered/bullet list in HTML",
					"help": "ul or <ul>, <ol> for ordered list, <li> for list elements in your lists",
					"question_type":"fillIn",
					"answer" : "ul"
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What does CSS stand for",
					"help": "Casading Style Sheets",
					"question_type":"mc",
					"picture":"",
					"answer_options": [{
							"text": "Computer Style Sheets",
							
						},
						{
							"text": "Computer Styling Sheets",
							
						},
						{
							"text": "Cascading Style Sheets",
							"correct": "true"
						},
						{
							"text": "Cascading Styling Sheets",
							
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What does HTML stand for",
					"help": "HyperText Markup Language, HTML is a Markup Language",
					"question_type":"mc",
					"picture":"",
					"answer_options": [{
							"text": "HTML",
							
						},
						{
							"text": "HyperText Markup Language",
							"correct": "true"
						},
						{
							"text": "Human To Machine Language",
							
						},
						{
							"text": "HyperText Marking Language",
							
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What is used to create templates",
					"question_type":"mc",
					"help": "Handlebars is the template creator for JS and HTML, Bootstrap is for CSS, Flask is for python web developent",
					"picture":"",
					"answer_options": [{
							"text": "Bootstrap",
							
						},
						{
							"text": "Flask",
							
						},
						{
							"text": "Homebrew",
							
						},
						{
							"text": "Handlebars",
							"correct": "true"
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "Which of these is NOT a bootstrap base color",
					"question_type":"mc",
					"help": "Data is not a color, Warning is yellow, Danger is red, Info is teal",
					"picture":"",
					"answer_options": [{
							"text": "Warning",
							
						},
						{
							"text": "Danger",
							
						},
						{
							"text": "Info",
							
						},
						{
							"text": "Data",
							"correct": "true"
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "How many sections is the Bootstrap Grid layout made out of",
					"question_type":"mc",
					"help": "12 sections you can divide up",
					"picture":"",
					"answer_options": [{
							"text": "12",
							"correct": "true"
						},
						{
							"text": "9",
							
						},
						{
							"text": "15",
							
						},
						{
							"text": "24",
							
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "Which of these symbol is an ID selector in CSS",
					"question_type":"mc",
					"help": "# is used for selecting ID",
					"picture":"",
					"answer_options": [{
							"text": "'#'",
							"correct": "true"
						},
						{
							"text": "'.'",
							
						},
						{
							"text": "'*'",
							
						},
						{
							"text": "'!'",
							
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "Which of these symbol is an Class selector in CSS",
					"question_type":"mc",
					"help": ". is used to select classes",
					"picture":"",
					"answer_options": [{
							"text": "'#'",
							
						},
						{
							"text": "'.'",
							"correct": "true"
						},
						{
							"text": "'*'",
							
						},
						{
							"text": "'!'",
							
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What goes in the place of --4--",
					"picture": "https://tonarinotony.github.io/questionJSON/question2.PNG",
					"help": "innerHTML to change the HTML using the template, rendered in render_view",
					"question_type":"fillIn",
					"answer" : "innerHTML"
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What goes in the place of --2--",
					"picture": "https://tonarinotony.github.io/questionJSON/question2.PNG",
					"help": "fetch, grabs the data from the api at the end of the link, returns a promise",
					"question_type":"fillIn",
					"answer" : "fetch"
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What goes in the place of --3--",
					"picture": "https://tonarinotony.github.io/questionJSON/question2.PNG",
					"help": "await, the program pauses and waits for the promise to complete",
					"question_type":"fillIn",
					"answer" : "await"
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What goes in the place of --1--",
					"picture": "https://tonarinotony.github.io/questionJSON/question2.PNG",
					"help": "await, the program pauses and waits for the promise to complete",
					"question_type":"fillIn",
					"answer" : "await"
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "What is the purpose of this function",
					"question_type":"mc",
					"help": "Async allows you to code synchronously while be asynchronous, await waits for promises to complete, fetch retrieves from the api",
					"picture":"https://tonarinotony.github.io/questionJSON/question2.PNG",
					"answer_options": [{
							"text": "To load some pictures from the database",
							
						},
						{
							"text": "To asynchronously acquire data from the api",
							"correct": "true"
						},
						{
							"text": "To make a model",
							
						},
						{
							"text": "To render a template using Handlebars",
							
						}
					]
				}
			},
			{
				"data":{
					"id" : 100,
					"question": "Is this json formatted correctly?",
					"question_type":"mc",
					"help": "No the json needs quotations around each element and commas separating each element",
					"picture": "https://tonarinotony.github.io/questionJSON/question3.PNG",
					"answer_options": [
						{
							"text": "no there aren't quotations around everything",
							
						},
						{
							"text": "no there aren't commas after every element",
							
						},
						{
							"text": "all of the above",
							"correct": "true"
						},
						{
							"text": "yes it is fine",
							
						}
					]
				
				}
			}
		]
	},
	{

		"quizId": 2,
		"title" : "quiz 1",
		"description" : "One of two available Quizzes",
		"questions":[
			{
				"data":{
					"id": 200,
					"question_type" : "mc",
					"question" : "What is 4+4",
					"answer_options" : ["1","2","3","8"]
				},
				"meta" :{
					"next_question": 201
				}
			},
			{
				"data":{
					"id": 201,
					"question_type" : "mc",
					"question" : "What is 3+3",
					"answer_options" : ["1","2","6","5"]
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