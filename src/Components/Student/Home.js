import React, { useState, useEffect } from 'react';

import Course from './Course';
import Search from './Search';

const Home = () =>{
    const [ID, setId] = useState(null);
    const loadCourse = (e) =>{               
        setId(e.StudentID);
       //console.log(ID);
      }
    
     // const course = [{c_modulecode:'', c_title:'', c_lettergrade:'', status:''}]
      const [courses, setCourse] = useState([]);
      
            
      useEffect(()=>{
          fetch(`http://77.68.120.8:1337/result`)
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
     //fetch(`http://77.68.120.8:1337/courseofferlist`)     
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
               {courses.map((item, index)=>(
                   <Course key={index} course = {item} />                   
               ))}                     
        </div>
    )
}

export default Home;