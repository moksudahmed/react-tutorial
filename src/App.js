import React from 'react';
import Card from './Components/Card'
import './index.css'
import Data from './data.json';
import List from './Components/List';
const title = 'To Do App';

function App(){
    return (
    <div>
        <h1 className='headingStyle'>{title}</h1>          
       <p>{Data.map((item, index)=> <Card key={index} title={item.title} desc={item.desc}/>)}</p>
       <p><List /></p>
        
   </div>
  )
}

export default App;