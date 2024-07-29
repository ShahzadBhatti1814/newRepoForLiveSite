document.querySelector("#fetchButton").addEventListener("click", fetchData);

async function fetchData() {
		const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
		console.log(response.data);
		const completedTodos = response.data.filter(todo => todo.completed);
		displayData(completedTodos);
	}
const displayData = (todos) => {
	const displayObjectData = document.querySelector("#result");
	displayObjectData.innerHTML = '';
	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i];
		displayObjectData.innerHTML += `
				<h2>Name: ${todo.title}</h2>
				<h3>Status: ${todo.completed}</h3>`;
}};


