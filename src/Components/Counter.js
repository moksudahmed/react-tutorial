import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0        
        }
    }
    
 incrementHandler = () =>{
        this.setState({
            count : this.state.count + 1
        })
 }
 decrementHandler = () =>{
    this.setState({
        count : this.state.count - 1
    })
}

    render() { 
        const {count} = this.state;
        return (  
            <div>
                <h1>Counter</h1>
                <h1><span>{count}</span></h1>
                <Button variant="success" onClick={this.incrementHandler} disabled = {count === 5? true: false}>+</Button>                
                <Button variant="danger" onClick={this.decrementHandler} disabled ={count === 0? true : false}>-</Button>                
            </div>
        );
    }
}
 
export default Counter;