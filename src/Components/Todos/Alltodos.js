import { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

export default function Alltodos (){
    const dummytodos = [{name:'moksud', description:'sylhet'}, {name:'ahmed', description:'dhaka'}]
    const [todos, setTodos] = useState(dummytodos);

    const handleTodo = (newTodo) =>{
        setTodos([...todos, newTodo]);
       // console.log(todos);
    };
    const deleteTodo = (todo) =>{
        let array = todos.filter(item => item !== todo)
        setTodos(...todos, array);
        console.log(todos);
    }
    return (
        <div>
            <NewTodo addTodo={handleTodo}/>
            <Todos todos = {todos} onDelete ={deleteTodo}/>
        </div>
    )
}