import React, { useState, useEffect } from 'react';
import Student from './Student';
import Course from './Course';
import Search from './Search';

const Home = () =>{
    const [ID, setId] = useState(null);
    const loadCourse = (e) =>{               
        setId(e.StudentID);
       //console.log(ID);
      }
    
      const course = [{batchName:'', dpt_name:'', mod_name:'', moduleCode:'', pro_shortName:''}]
      const [courses, setCourse] = useState(course);
            
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
    
     const search = searchValue => {
     
      console.log(searchValue.StudentID);
      fetch(`http://77.68.120.8:1337/result/${searchValue.StudentID}`)
      .then((res)=>{
        return res.json();
     })
     .then((data)=>{
         setCourse(data);
         console.log(data);
     });
        };
    return (
        <div>           
            <Search search={search} />           
           
        </div>
    )
}

export default Home;