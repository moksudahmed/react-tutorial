import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Home extends Component {
    constructor (props){
        super(props);
        this.state = {
            changedValue : ''
        }
    }
    eventHandler = () =>{

        return <p>{this.state.changedValue}</p>

    }
    handleOnChange = (e) =>{
        this.setState({
            changedValue : e.target.value
        }, ()=>{
            //console.log(e.target.value);
        });
        

    }
    render() { 
        
        return (
        <div><h1>Home Page</h1>
            <input type="text" onChange={this.handleOnChange}></input>
            <Button onClick={this.eventHandler}>Click Here</Button>
            <p>{this.state.changedValue}</p>
        </div>
        );
    }
}
export default Home;