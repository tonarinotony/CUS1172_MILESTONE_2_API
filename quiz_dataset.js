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
					"answer_options": ["https://tonarinotony.github.io/questionJSON/answerSTYLE1.PNG","https://tonarinotony.github.io/questionJSON/answerSTYLE1.PNG","https://tonarinotony.github.io/questionJSON/answerSTYLE1.PNG","https://tonarinotony.github.io/questionJSON/answerSTYLE1.PNG"]
				},
				"meta" :{
					"next_question" : 101
				}
			},
			{
				"data":{
					"id" : 101,
					"question": "What goes in ---1---",
					"question_type":"mc",
					"help": "!DOCquestion_type is a document question_type declaration and !DOCtype html informs the browser you will be using HTML5",
					"picture": "https://tonarinotony.github.io/questionJSON/question1.PNG",
					"answer" : 0,
					"answer_options": ["!DOCtype html","DOCtype html","!DOCtype HTML","DOCtype html"]
				},
				"meta" :{
					"next_question" : 102
				}
			},
			{
				"data":{
					"id" : 102,
					"question": "What does JSON stand for",
					"question_type":"mc",
					"help": "The correct answer is Java Script Object Notation",
					"picture":"",
					"answer" : 3,
					"answer_options": ["Java Script Online Notation","Java Script Original Notation","Jawa Stars On Naboo","Java Script Object Notation"]
				},
				"meta" :{
					"next_question" : 103
				}
			},
			{
				"data":{
					"id" : 103,
					"question": "How many heading tags are there in HTML",
					"help": "There are 6, 1 being the largest, 6 being the smallest",
					"question_type":"fillIn",
					"answer" : "6"
				},
				"meta" :{
					"next_question" : 104
				}
			},
			{	"data":{
					"id" : 104,
					"question": "<--1--> What is the tag to create a line break in HTML(Just fill in do not use <>)",
					"help": "br, or <br>",
					"question_type":"fillIn",
					"answer" : "br"
				},
				"meta" :{
					"next_question" : 105
				}
			},
			{	"data":{
					"id" : 105,
					"question": "<--1--> What is the tag for paragraphs in HTML",
					"help": "p, or <p>",
					"question_type":"fillIn",
					"answer" : "p"
				},
				"meta" :{
					"next_question" : 106
				}
			},
			{
				"data":{
					"id" : 106,
					"question": "<--1--> What is the tag for an unordered/bullet list in HTML",
					"help": "ul or <ul>, <ol> for ordered list, <li> for list elements in your lists",
					"question_type":"fillIn",
					"answer" : "ul"
				},
				"meta" :{
					"next_question" : 107
				}
			},
			{
				"data":{
					"id" : 107,
					"question": "What does CSS stand for",
					"help": "Casading Style Sheets",
					"question_type":"mc",
					"picture":"",
					"answer" : 2,
					"answer_options": ["Computer Style Sheets","Computer Styling Sheets","Cascading Style Sheets","Cascading Styling Sheets"]
				},
				"meta" :{
					"next_question" : 108
				}
			},
			{
				"data":{
					"id" : 108,
					"question": "What does HTML stand for",
					"help": "HyperText Markup Language, HTML is a Markup Language",
					"question_type":"mc",
					"picture":"",
					"answer" : 1,
					"answer_options": ["HTML","HyperText Markup Language","Human To Machine Language","HyperText Marking Language"]
				},
				"meta" :{
					"next_question" : 109
				}
			},
			{
				"data":{
					"id" : 109,
					"question": "What is used to create templates",
					"question_type":"mc",
					"help": "Handlebars is the template creator for JS and HTML, Bootstrap is for CSS, Flask is for python web developent",
					"picture":"",
					"answer" : 3,
					"answer_options": ["Bootstrap","Flask","Homebrew","Handlebars"]
				},
				"meta" :{
					"next_question" : 110
				}
			},
			{
				"data":{
					"id" : 110,
					"question": "Which of these is NOT a bootstrap base color",
					"question_type":"mc",
					"help": "Data is not a color, Warning is yellow, Danger is red, Info is teal",
					"picture":"",
					"answer" : 3,
					"answer_options": ["Warning","Danger","Info","Data"]
				},
				"meta" :{
					"next_question" : 111
				}
			},
			{
				"data":{
					"id" : 111,
					"question": "How many sections is the Bootstrap Grid layout made out of",
					"question_type":"mc",
					"help": "12 sections you can divide up",
					"picture":"",
					"answer" : 1,
					"answer_options": ["12","9","15","24"]
				},
				"meta" :{
					"next_question" : 112
				}
			},
			{
				"data":{
					"id" : 112,
					"question": "Which of these symbol is an ID selector in CSS",
					"question_type":"mc",
					"help": "# is used for selecting ID",
					"picture":"",
					"answer" : 0,
					"answer_options": ["'#'","'.'","'*'","'!'"]
				},
				"meta" :{
					"next_question" : 113
				}
			},
			{
				"data":{
					"id" : 113,
					"question": "Which of these symbol is an Class selector in CSS",
					"question_type":"mc",
					"help": ". is used to select classes",
					"picture":"",
					"answer" : 1,
					"answer_options": ["'#'","'.'","'*'","'!'"]
				},
				"meta" :{
					"next_question" : 114
				}
			},
			{
				"data":{
					"id" : 114,
					"question": "What goes in the place of --4--",
					"picture": "https://tonarinotony.github.io/questionJSON/question2.PNG",
					"help": "innerHTML to change the HTML using the template, rendered in render_view",
					"question_type":"fillIn",
					"answer" : "innerHTML"
				},
				"meta" :{
					"next_question" : 115
				}
			},
			{
				"data":{
					"id" : 115,
					"question": "What goes in the place of --2--",
					"picture": "https://tonarinotony.github.io/questionJSON/question2.PNG",
					"help": "fetch, grabs the data from the api at the end of the link, returns a promise",
					"question_type":"fillIn",
					"answer" : "fetch"
				},
				"meta" :{
					"next_question" : 116
				}
			},
			{
				"data":{
					"id" : 116,
					"question": "What goes in the place of --3--",
					"picture": "https://tonarinotony.github.io/questionJSON/question2.PNG",
					"help": "await, the program pauses and waits for the promise to complete",
					"question_type":"fillIn",
					"answer" : "await"
				},
				"meta" :{
					"next_question" : 117
				}
			},
			{
				"data":{
					"id" : 117,
					"question": "What goes in the place of --1--",
					"picture": "https://tonarinotony.github.io/questionJSON/question2.PNG",
					"help": "await, the program pauses and waits for the promise to complete",
					"question_type":"fillIn",
					"answer" : "await"
				},
				"meta" :{
					"next_question" : 118
				}
			},
			{
				"data":{
					"id" : 118,
					"question": "What is the purpose of this function",
					"question_type":"mc",
					"help": "Async allows you to code synchronously while be asynchronous, await waits for promises to complete, fetch retrieves from the api",
					"picture":"https://tonarinotony.github.io/questionJSON/question2.PNG",
					"answer" : 1,
					"answer_options": ["To load some pictures from the database","To asynchronously acquire data from the api","To make a model","To render a template using Handlebars"]
				},
				"meta" :{
					"next_question" : 119
				}
			},
			{
				"data":{
					"id" : 119,
					"question": "Is this json formatted correctly?",
					"question_type":"mc",
					"help": "No the json needs quotations around each element and commas separating each element",
					"picture": "https://tonarinotony.github.io/questionJSON/question3.PNG",
					"answer" : 2,
					"answer_options": ["no there aren't quotations around everything","no there aren't commas after every element","all of the above","yes it is fine"]
				
				},
				"meta" :{
					"next_question" : -1
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