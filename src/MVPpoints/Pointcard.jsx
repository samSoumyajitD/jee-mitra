import React, { Component } from 'react';
import Upskill from '../Image/upskilling.png';
import Hassle from '../Image/hassle.png'
import Resume from '../Image/resume.png'
import './Pcard.css';
class Pointcard extends Component {
    render() {
        return (
            <div className='helpp'>
                <div className='helpphead'>How JeeMitra helps you</div>
            <div className='pointcard'>
                
                <div className='pointcarditem'> 
                <div className='pointcardimg'><img src={Upskill} /></div> 
                <div className='pointcardhead'>Get Upskilled</div>
                <div className='pointcardchar'>Network with peers and attend community events to give your career a headstart.</div>
                </div>

                <div className='pointcarditem'><div className='pointcardimg'><img src={Resume} /></div><div className='pointcardhead'>Create Profile</div><div className='pointcardchar'>Create your profile with easy-to fill form and get recommended with relevant colleges.</div></div>
                <div className='pointcarditem'><div className='pointcardimg'><img src={Hassle} /></div><div className='pointcardhead'>Hassle Free</div> <div className='pointcardchar'>An effortless way to select colleges through a quick and easy process.</div></div>   
                </div>
                <div className='helpbutton'>
                <button className="button">
  Get Started
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
  </svg>
</button>
                </div>
                
            </div>
        );
    }
}

export default Pointcard;