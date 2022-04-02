import { useState } from "react";
import Todo from "./Todo";
import Todos from "./Todos";

export default function Alltodos (){

    const todo = [{name:'moksud', description:'sylhet'}]
    const [todos, setTodos] = useState(todo);

    const handleTodo = (newTodo) =>{
        setTodos(... todos, newTodo);
    }
    return (
        <div>
            <Todo addTodo={handleTodo}/>
            <Todos todos = {todo} />
        </div>
    )
    }