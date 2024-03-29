import React, { Component } from 'react';
import './ValuCard.css'
class ValuCard extends Component {
    render() {
        return (
            <div className='valcard'>
            <div >
                
                <div className='valnum'>1000+</div>
                <div className='valchar'>Student Members</div>
                <div className='valdiv'></div>
            </div>  
            <div >
                
                <div className='valnum'>100+</div>
                <div className='valchar'>Student Mentors</div>
                <div className='valdiv'></div>
            </div>  
            <div >
                
                <div className='valnum'>1000+</div>
                <div className='valchar'>College Data</div>
                <div className='valdiv'></div>
            </div>  
             
            </div>
        );
    }
}

export default ValuCard;