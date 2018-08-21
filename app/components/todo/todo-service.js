

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/MATTHEWDOBROWOLSKI/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = ""

export default class TodoService {


	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
			todoList = (res.data.data)
			draw(todoList)
			})
			.catch(logError)
	}

	addTodo(todo, call) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
			todoList.push(todo)
			})
			.then(call)
			.catch(logError)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = todoList.find(todo=> todo._id == todoId);
		todo.completed = !todo.completed;///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				call(res)//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.then()
			.catch(logError)
	}

	removeTodo(todoId,call)  {
		
    todoApi.delete('',todoId)
	.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
		todoList.push(todo)
		})
		.then(call)
		.catch(logError)
}	
	
	// .then(call)
		// .catch(logError)
		
	}
		
		// Umm this one is on you to write.... The method is a DELETE




