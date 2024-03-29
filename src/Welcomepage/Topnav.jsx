import React, { Component } from 'react';
import './styles.css';
class Topnav extends Component {
    render() {
        return (
            <div className='nav'>
            <div >
                <ul className='navls'>
                    <li className='jeem'>JeeMitra</li>
                    <li className='jeem1'><button className="btn1">
      <p>Colleges</p>
      
    </button></li>
    <li className='jeem1'><button className="btn1">
      <p>Mentors</p>
      
    </button></li>
    <li className='jeem1'><button className="btn1">
      <p>Pricing</p>
      
    </button></li>
    <li className='jeem1'><button className="btn1">
      <p>FAQ's</p>
      
    </button></li>
                </ul>
            </div>  
            <div>
                <ul className='navls1'>
                  
                 
                    
                </ul>
            </div>
            </div>
        );
    }
}

export default Topnav;