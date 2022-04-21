import { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import './todo.module.css';

export default function Alltodos (){
    const dummytodos = [{name:'moksud', description:'sylhet'}, {name:'ahmed', description:'dhaka'}]
    const [todos, setTodos] = useState(dummytodos);

    const handleTodo = (newTodo) =>{
        setTodos([...todos, newTodo]);     
    };
    const deleteTodo = (todo) =>{
        const newTodos = todos.filter(item => item !== todo);
        setTodos(newTodos);        
    }
    return (
        <div className='todobody'>
            <NewTodo addTodo={handleTodo}/>
            <Todos todos = {todos} onDelete ={deleteTodo}/>
        </div>
    )
}