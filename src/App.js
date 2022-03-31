import React, {Component} from 'react';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import './index.css';
import Data from './data.json';
import List from './Components/List';
import ReactBootstrap from './Components/React_Bootstrap/ReactBootstrap';
import Counter from './Components/Counter';
import Index from './Components/home/Index';

const title = 'To Do App';

function Welcome(){
    return <h1>Welcome</h1>
}

class App extends Component {
   
    render() { 
        return (
            <div>
                <Index />
                {/* <ReactBootstrap />
                <Welcome />
                <Counter />
                <h1 className='headingStyle'>{title}</h1>          
                <p>{Data.map((item, index)=> <Card key={index} title={item.title} desc={item.desc}/>)}</p>
                <p><Card2 title="Hello" desc="World"/></p>
                <p><List /></p>                     */}
            </div>
        );
    }
}
 
export default App;
