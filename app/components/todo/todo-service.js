const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos/",
  timeout: 3000
});

function logError(e) {
  console.log(e);
}

let todoList = "";

export default class TodoService {
  getTodos(draw) {
	console.log("Getting the Todo List");
	
    todoApi
      .get("")
      .then(res => {
        // <-- WHY IS THIS IMPORTANT????
        todoList = res.data.data;
        let k = todoList;
        draw(k);
      })
      .catch(logError);
  }

  addTodo(todo, call) {
    // WHAT IS THIS FOR???
    todoApi
      .post("", todo)
      .then(function(res) {
        // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?

        todoList.push(todo);
        call(res);
      })
      .catch(logError);
  }

  toggleTodoStatus(todoId) {
    // MAKE SURE WE THINK THIS ONE THROUGH
    //STEP 1: Find the todo by its index **HINT** todoList
	const todo = todoList.find(todo => todo._id == todoId);
console.log(todo)
	
    todo.completed = !todo.completed; ///MODIFY THIS LINE

    //STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
    todoApi
      .put(todoId, todo)
      .then(function(res) {
        call(res); //DO YOU WANT TO DO ANYTHING WITH THIS?
      })
      .catch(logError);
  }

  removeTodo(todoId, call) {
    todoApi.delete(todoId);
    this.getTodos(call);

    // Umm this one is on you to write.... The method is a DELETE
  }
}
