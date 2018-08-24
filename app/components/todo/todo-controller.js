import TodoService from "./todo-service.js";



var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	
	todoService.getTodos(draw)
}
// function count(){
// 	let k = 
// 	document.getElementById('count').innerHTML = k
	
// }
function draw(todos) {
	let template = `<h2>Total todos: ${todos.length}</h2>`
	//WHAT IS MY PURPOSE?

	//BUILD YOUR TODO TEMPLATE HERE




	if (`{todo.length}`<= 0){
		template +=`
		<h4>there isnt any todos <h4>
		`
	}else{
		todos.forEach(todo=>{
			
			
			template += `
				<div class="row">
				<ul id="list">${todo.description}</ul>
				<button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete </button>
				
				</div>
				`
			});
		}
		
			
			
			
			
	
	document.getElementById('todo').innerHTML = template
	// DONT FORGET TO LOOP
}
		

		
		


export default class TodoController {
	constructor() {
		todoService.getTodos(draw);
		
	
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault()
		console.log(e.target.todo.value) // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			description: e.target.todo.value,
			completed: false,
			user: todoService.user
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId,getTodos)
		
		
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
