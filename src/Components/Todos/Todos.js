import React, { Component, useState } from 'react';
import Todo from './Todo';
import './todo.module.css';


const Todos = (props) =>{   
    const deleteTodos = (e) =>{
        props.onDelete(e);       
    }
    return (
        <div>
            {props.todos.map((todo, index)=>(
                <Todo key = {index} todo ={todo} remove = {deleteTodos}/>
            ))}
        </div>
    )
}
export default Todos;