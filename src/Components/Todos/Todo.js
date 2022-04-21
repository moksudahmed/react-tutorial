import React, { Component, useState } from 'react';
import './todo.module.css';

const Todo = (props) =>{
    const onDelete = (e) =>{
        props.remove(props.todo);        
    }
   console.log(props);
    return <div >
        <h1 className='headingStyle'>{props.todo.name}</h1>
        <p>{props.todo.description}</p>   
        <button type='submit' onClick={onDelete}>X</button>     
        </div>
};
export default Todo;