import React, { Component } from 'react';


const Course = (props) =>{
   
    return(
        <div>
            <h1>{props.course.batchName}</h1>
            <p>{props.course.mod_name}</p>
        </div>
    )
};

export default Course;