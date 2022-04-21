import React, { useState, useEffect } from 'react';
import Course from "./Course";
import Search from './Search';

const Student= (props) =>{
    const course = [{batchName:'', dpt_name:'', mod_name:'', moduleCode:'', pro_shortName:''}]
    const [courses, setCourse] = useState(course);
    const url = `http://77.68.120.8:1337/courseofferlist/${props.NewID}`;
    console.log(props);
    console.log(url);
    useEffect(()=>{
        fetch(`http://77.68.120.8:1337/courseofferlist`)
        .then((res)=>{
           return res.json();
        })
        .then((data)=>{
            setCourse(data);
            console.log(data);
        })
    }, []);
   const loadCourse = () =>{
     console.log("Load Course")
   }
   const search = searchValue => {
   

    fetch(`http://77.68.120.8:1337/courseofferlist/${props.NewID}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          console.log(jsonResponse.Search);
          //setLoading(false);
        } else {
          console.log(jsonResponse.Error);
          //setLoading(false);
        }
      });
  	};
    return (
        <div>
           
              {/* {courses.map((course, index)=>(
                <Course key = {index} course ={course}/>
            ))}
             */}
            <h1>Course Informations</h1>
        </div>
    )
};

export default Student;
