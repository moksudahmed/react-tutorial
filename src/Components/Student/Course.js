import React, { Component } from 'react';


const Course = (props) =>{
   
    return(
        <div>
            <h1>{props.course.c_modulecode}</h1>
            <p>{props.course.c_title} {props.course.c_title} {props.course.c_lettergrade}</p>
        </div>
    )
};

export default Course;