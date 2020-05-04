const list = {
	list:
	[{
		"quizId": 1,
		"first" : 100,
		"title" : "quiz 1",
		"description" : "One of two available Quizzes"
	},
	{
		"quizId": 2,
		"first" : 100,
		"title" : "quiz 2",
		"description" : "One of two available Quizzes"
	},
	{
		"quizId": 3,
		"first" : 100,
		"title" : "quiz 3",
		"description" : "Defunk Quiz"
	},
	{
		"quizId": 4,
		"first" : 400,
		"title" : "quiz 4",
		"description" : "Test Quiz"
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
					"answer" : 0,
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
		"title" : "quiz 2",
		"description" : "One of two available Quizzes",
		"questions":[
				{
				"data":{
					"id" : 100,
					"question": "What programming language is this",
					"question_type":"mc",
					"help": "This syntax is Java",
					"picture": "https://tonarinotony.github.io/questionJSON/question4.PNG",
					"answer" : 0,
					"answer_options": ["Java","Python","C++","C#"]
					},
					"meta" :{
						"next_question" : 101
					}

				},

				{
				"data":
					{
						"id" : 101,
						"question": "What programming language is this",
						"question_type":"mc",
						"help": "This syntax is Python",
						"picture": "https://tonarinotony.github.io/questionJSON/question5.PNG",
						"answer" : 1,
						"answer_options": ["Java","Python","C++","C#"]
					},
					"meta" :{
						"next_question" : 102
					}
				},
				{
				"data":
					{
						"id" : 102,
						"question": "What programming language is this",
						"question_type":"mc",
						"help": "This syntax is C++",
						"picture": "https://tonarinotony.github.io/questionJSON/question6.PNG",
						"answer" : 2,
						"answer_options": ["Java","Python","C++","C#"]
					},
					"meta" :{
						"next_question" : 103
					}
				},
				{
				"data":
					{
						"id" : 103,
						"question": "Which of these is not a way to initiate a variable in Javascript",
						"question_type":"mc",
						"help": "var, const and let are all ways to initiate a variable in Javascript",
						"picture": "",
						"answer" : 2,
						"answer_options": ["var","const","int","let"]
					},
					"meta" :{
						"next_question" : 104
					}
				},
				{
				"data":
					{
						"id" : 104,
						"question": "Which one of these is not a primitive variable in Java",
						"question_type":"mc",
						"help": "String refers to an object therefore is not a primitive question_type",
						"picture": "",
						"answer" : 1,
						"answer_options": ["int","String","char","double"]
					},
					"meta" :{
						"next_question" : 105
					}
				},
				{
				"data":
					{
						"id" : 105,
						"question": "Which programming paradigm is most closely related to Java",
						"question_type":"mc",
						"help": "Object Oriented Programming",
						"picture": "",
						"answer" : 0,
						"answer_options": ["Object Oriented Programming","Procedural Programming","Functional Programming","Logic Programming"]
					},
					"meta" :{
						"next_question" : 106
					}
				},
				{
				"data":
					{
						"id" : 106,
						"question": "Which one of these is not a programming language",
						"question_type":"mc",
						"help": "HTML is a Markup language",
						"picture": "",
						"answer" : 1,
						"answer_options": ["Java","HTML","Scheme","Ruby"]
					},
				"meta" :{
					"next_question" : 107
				}
				},
				{
				"data":
					{
						"id" : 107,
						"question": "Abstract classes are ...",
						"question_type":"mc",
						"help": "Abstract classes are accessed with keyword extends, and cannot have implementation or static and final modifiers. They can have declaration however",
						"picture": "",
						"answer" : 1,
						"answer_options": ["allowed to have implementation","allowed to have declaration","allowed to have static modifiers","accessed using keyword implements"]
					},
					"meta" :{
						"next_question" : 108
					}
				},
				{
				"data":
					{
						"id" : 108,
						"question": "What is the primitive question_type to store True or False values in Java",
						"help": "boolean is the primitive question_type",
						"question_type":"fillIn",
						"answer" : "boolean"
					},
					"meta" :{
						"next_question" : 109
					}
				},
				{
				"data":
					{
						"id" : 109,
						"question": "What is the method converting an object to a String in Java",
						"help": "toString() is the method",
						"question_type":"fillIn",
						"answer" : "toString()"
					},
					"meta" :{
						"next_question" : 110
					}
				},
				{
				"data":
					{
						"id" : 110,
						"question": "How do you get the length of an array",
						"help": "length is a property of arrays you can access, array.length to access",
						"question_type":"fillIn",
						"answer" : "array.length"
					},
					"meta" :{
						"next_question" : 111
					}
				},
				{
				"data":
					{
						"id" : 111,
						"question": "How do you get the length of an ArrayList",
						"help": "ArrayList have a size method so to access length you use size()",
						"question_type":"fillIn",
						"answer" : "size()"
					},
					"meta" :{
						"next_question" : 112
					}
				},
				{
				"data":
					{
						"id" : 112,
						"question": "How do you add to the end of an ArrayList",
						"help": "ArrayList have an add method so to access length you use add()",
						"question_type":"fillIn",
						"answer" : "add()"
					},
					"meta" :{
						"next_question" : 113
					}
				},
				{
				"data":
					{
						"id" : 113,
						"question": "Which one of these is proper syntax for creating an Object in Java",
						"question_type":"mc",
						"help": "Object name = new Object(); is the proper syntax",
						"picture": "",
						"answer" : 0,
						"answer_options":["Object name = new Object();","name = new Object();","new Object = name;","name = Object()"]
					},
					"meta" :{
						"next_question" : 114
					}
				},
				{
				"data":
					{
						"id" : 114,
						"question": "Which one of these is proper syntax for creating an Object in Python",
						"question_type":"mc",
						"help": "name = Object() is the proper syntax",
						"picture": "",
						"answer" : 3,
						"answer_options": ["Object name = new Object();","name = new Object();","new Object = name;","name = Object()"]
					},
					"meta" :{
						"next_question" : 115
					}
				},
				{
				"data":
					{
						"id" : 115,
						"question": "Which one of these is not a valid way to write the String foo'bar in Python",
						"question_type":"mc",
						"help": "\\ cancels out the action of the following character, surrounding single quotes with double quotes and vice versa allows you to see the other, triple quotes allow strings to span multiple lines",
						"picture": "",
						"answer" : 3,
						"answer_options": ["\"\"\"foo'bar\"\"\"","\"foo'bar\"","'foo\\'bar'","'foo'bar'"]
					},
					"meta" :{
						"next_question" : 116
					}
				},
				{
				"data":
					{
						"id" : 116,
						"question": "Which of the following is not a Python built-in function",
						"question_type":"mc",
						"help": "diff() is not a built in function",
						"picture": "",
						"answer" : 0,
						"answer_options": ["diff()","round()","repr()","map())"]
					},
					"meta" :{
						"next_question" : 117
				}
			},
				{
				"data":
					{
						"id" : 117,
						"question": "Which of these is a function defined using Function Declarations in Javascript",
						"question_type":"mc",
						"help": "function print(){console.log('hello')} is a JS Function Declaration",
						"picture": "",
						"answer" : 0,
						"answer_options": ["function print(){console.log('hello')}","const print = function(){console.log('hello')}","const print = () => {console.log('hello')}","const print() => {console.log('hello')}"]
					},
					"meta" :{
						"next_question" : 118
				}
			},
				{
				"data":
					{
						"id" : 118,
						"question": "Which of these is a function defined using Function Expression in Javascript",
						"question_type":"mc",
						"help": "const print = function(){console.log('hello')} is a Function Expression in JS",
						"picture": "",
						"answer" : 1,
						"answer_options": ["function print(){console.log('hello')}","const print = function(){console.log('hello')}", "const print = () => {console.log('hello')}","const print() => {console.log('hello')}"]
					},
					"meta" :{
						"next_question" : 119
					}
				},
				{
				"data":
					{
						"id" : 119,
						"question": "Which of these is a function defined using Arrow Function in Javascript",
						"question_type":"mc",
						"help": "const print = () => {console.log('hello')} is a JS arrow function ",
						"picture": "",
						"answer" : 2,
						"answer_options": ["function print(){console.log('hello')}","const print = function(){console.log('hello')}","const print = () => {console.log('hello')}","const print() => {console.log('hello')}"]
					},
					"meta" :{
						"next_question" : -1
					}
				}
		]
	},
	{
	"quizId": 3,
		"title" : "quiz 3",
		"description" : "Fake Test",
		"questions":
		[
			{
				"data":{
					"id" : 100,
					"question": "Fake Test 1",
					"question_type":"mc",
					"help": "no help",
					"answer" : 0,
					"answer_options": ["Hello","It","Is","I"]
				},
				"meta" :{
					"next_question" : -1
				}
			}
		]
	},
	{
	"quizId": 4,
		"title" : "quiz 4",
		"description" : "Fake Test",
		"questions":
		[
			{
				"data":{
					"id" : 400,
					"question": "Fake Test 2",
					"question_type":"mc",
					"help": "inline styling, is when you style directly on the HTML element, Don't use it too often, it isn't very flexible and clutters your code",
					"answer" : 0,
					"answer_options": ["Random","Numbers","Work","Too"]
				},
				"meta" :{
					"next_question" : 8000231
				}
			},
			{
				"data":{
					"id" : 8000231,
					"question": "Fake Test 2",
					"question_type":"mc",
					"help": "inline styling, is when you style directly on the HTML element, Don't use it too often, it isn't very flexible and clutters your code",
					"answer" : 0,
					"answer_options": ["Random","Numbers","Work","Too"]
				},
				"meta" :{
					"next_question" : -1
				}
			}
		]
	}

	]
}

module.exports.list = list;
module.exports.quiz = quiz;