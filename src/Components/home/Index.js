import React, { Component } from 'react';
import Home from './Home';
import LandingPage from './LandingPage';

class ForntPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
    
            isLogedIn : true
         }
    }
    

     render() { 
         const {isLogedIn} = this.state;
         if(isLogedIn){
                return <Home />
         } else{
             return <LandingPage />
         }

        }


}
 
export default ForntPage;