let todos=[
    {id:1,task:"Learn Javascript",completed:false},
    {id:2,task:"Learn React",completed:true},
    {id:3,task:"Learn React Native",completed:false},
    {id:4,task:"Learn .NET",completed:false},
]

//Add

function addTodos(todo){
    const newTodo={
        id:Date.now(),
        task:todo,
        completed:false
    };
    todos.push(newTodo)
}

//Delete

function deleteTodo(id){
todos=todos.filter(todo=>todo.id!==id)
}

//filtering

function filterTodo(status){
    if(status === "all"){
        return todos;
    }
    if(status === "completed"){
        return todos.filter(todo=>todo.completed)
    }
    if(status === "pending"){
        return todos.filter(todo=>!todo.completed)
    }
}

addTodos("Learn TypeScript");

console.log("After Add:");
console.log(todos);

deleteTodo(1);

console.log("After Delete:");
console.log(todos);

console.log("Completed:");
console.log(filterTodo("completed"));

console.log("Pending:");
console.log(filterTodo("pending"));

console.log("All:");
console.log(filterTodo("all"));