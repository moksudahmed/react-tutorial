import React, { Component, useState } from 'react';
//import './todo.module.css';

export default function Todo(props){    
    const [todo, setTodos] = useState({name:'', description:''});
    const {name, description} = todo;

    const changeHandler = (e) =>{      
        setTodos({...todo, [e.target.name] : e.target.value});
    }
    const submitHandler = (e) =>{
        e.preventDefault(); 
        props(todo)
    }
    return (        
                
                <div className='todoForm'>
                    <form action=''>
                        <div>
                            <span>Title</span>
                            <input type="text" name="name" onChange={changeHandler} required></input>
                        </div>
                        <div>
                            <span>Description</span>
                            <input type="text" name="description" onChange={changeHandler} required></input>
                        </div>
                        <div>
                            <button type='submit' onClick={submitHandler}>Add to do</button>
                        </div>
                     
                        
                    </form>
                </div>
            
         );
    
}
 
