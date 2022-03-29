import ReactDOM from 'react-dom';
import './index.css'
const title = 'To Do App';
const desc ='Hello World';
const date = new Date();
const currentYear = date.getFullYear();

ReactDOM.render(
   <div>
       <h1 className='headingStyle'>{title}</h1>
       <div className='card'>
           <h2 className='cardTitle'>{title}</h2>
           <p>{desc}</p>       
       <    p>{currentYear}</p>
       </div>
   </div>, 
    document.getElementById('root')
);