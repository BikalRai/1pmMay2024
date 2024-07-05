const todos = document.getElementById("todos");

const myAddBtn = document.getElementById("addBtn");
const myTodoInput = document.querySelector(".addTodo");


myAddBtn.addEventListener("click", function(e) {
	const myValue = myTodoInput.value;
	createTodoElement(myValue);

});

function createTodoElement (myTodo) {

	const todo = document.createElement("div");
	const todoItem = document.createElement("input");
	const editBtn = document.createElement("button");
	const delBtn = document.createElement("button");

	editBtn.innerText = "Edit"
	delBtn.textContent = "Delete"

	todo.setAttribute("class", "todo");

	todoItem.setAttribute("type", "text");
	todoItem.setAttribute("readonly", "readonly")
	todoItem.value=`${myTodo}`;

	todo.appendChild(todoItem);
	todo.appendChild(editBtn);
	todo.appendChild(delBtn);

	todos.appendChild(todo);

}


