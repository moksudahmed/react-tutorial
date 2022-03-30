import React, { Component } from 'react';
import '../index.css';

class Card2 extends Component {
    
    render() { 
        return (
                 <div>
           <div className='card'>
                <h2 className='cardTitle'>{this.props.title}</h2>
                <p className='cardDesc'>{this.props.desc}</p>       
                <p className='cardFooter'></p>
            </div>
        </div>
        );
    }
}
 
export default Card2;
     