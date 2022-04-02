import React, { Component, useState } from 'react';
import Todo from './Todo';
//import './todo.module.css';

export default function Todos(props){    
    const Todo = [{name:'', description:''}];
    //const [todos, setTodos] = useState({name:'', description:''});  
    console.log(props.todos);
    // const onAddTodo = (todo) =>{
    //     setTodos(...todos,todo);
    //     console.log(todos);
    
    // }
    return (      
                  
                <div className='todobody'>
                    <h1>Todo App</h1>                
                <Todo />
                <div className='card'>
                    <p>Todo List</p>
                    <ul>
                        <li>Todo1</li>
                        <li>Todo2</li>
                        <li>Todo3</li>
                    </ul>
                </div>
                </div>            
            
         );
    
}
 
