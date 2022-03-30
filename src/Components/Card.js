import React from 'react';
import '../index.css'

const date = new Date();
const currentYear = date.getFullYear();

function Card(props){
    const {title, desc} = props;
    return (
        <div>
           <div className='card'>
                <h2 className='cardTitle'>{title}</h2>
                <p className='cardDesc'>{desc}</p>       
                <p className='cardFooter'>{currentYear}</p>
            </div>
        </div>
    )
}

export default Card;