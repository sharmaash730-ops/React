import { useOptimistic, useState } from "react";

export default function App(){
    const [todos,setTodos] =useState([]);

    const [optimisticTodos,addOptimisticTodo] = useOptimistic(
        todos,
        (prevTodos,newTodo) => [...prevTodos,newTodo]
    );
    async function handleAddToDos(formData){
        const newTodo = {
            id: Date.now(),
            title:formData.get("text")
        };

        addOptimisticTodo(newTodo);

        await new Promise((resolve) => setTimeout(resolve,2000));

        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            body:JSON.stringify(newTodo),
            headers:{
                "Content-Type":"application/json",
            },
        });
        const data = await response.json();

        setTodos((prevTodos) => [...prevTodos,{...data,title:newTodo.title}])
    }
    return (
        <div>
            <h1>Ashish Decodes</h1>
            <form action={handleAddToDos}>
                <input type="text" name="text" placeholder="Enter a task"/>
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {optimisticTodos.map((todo)=>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}
