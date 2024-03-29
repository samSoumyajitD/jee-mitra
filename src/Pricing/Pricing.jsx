import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faRocket,faCheck } from '@fortawesome/free-solid-svg-icons'
import './Pricing.css';
class Pricing extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = () => {
    const pricingSection = document.querySelector('.pricing');
    const featuresSection = document.querySelector('.features');

    if (pricingSection && featuresSection) {
        const pricingRect = pricingSection.getBoundingClientRect();
        const featuresRect = featuresSection.getBoundingClientRect();

        if (featuresRect.top < pricingRect.height) {
          pricingSection.classList.add('sticky');
      } else {
          pricingSection.classList.remove('sticky');
      }
    }
};
    render() {
    
        return (
            <div>
                <div className='pricing'>
              <div className='compp'>
                <div className='compp1'> Compare programs</div>
             

              <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
  </svg>
              </div>
              <div className='pricecard'>
              <div className='pricecardbutton'><button >Basic</button></div>
              <div className='pricechar'>Know Your Self</div>
             
              <div className='pricenum'>₹ 4,999</div>
              
              <div className='pricecardbutton1'><button >Enroll Now</button></div>
              </div>
              <div className='pricecard'>
              <div className='pricecardbutton'><button >Basic</button></div>
              <div className='pricechar'>Know Your Self</div>
              <div className='pricenum'>₹ 4,999</div>
              <div className='pricecardbutton1'><button >Enroll Now</button></div>
              </div>
              <div className='pricecard'>
              <div className='pricecardbutton'><button >Basic</button></div>
              <div className='pricechar'>Know Your Self</div>
              <div className='pricenum'>₹ 4,999</div>
              <div className='pricecardbutton1'><button >Enroll Now</button></div>
              </div>
              </div>
              <div className='features'>
                <div className='feature1'>
                  <div className='feature12'><div className='featureicon'> <FontAwesomeIcon icon={faRocket} /></div>         <div className='feature121'>Career Exploration</div> </div>
                  <div className='feature13'>Access well-researched content on 550+ careers</div>
                  </div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                
              </div>
              <div className='features'>
                <div className='feature1'>
                  <div className='feature12'><div className='featureicon'><FontAwesomeIcon icon={faRocket} /></div>         <div className='feature121'>Career Exploration</div> </div>
                  <div className='feature13'>Access well-researched content on 550+ careers</div>
                  </div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                
              </div>
              <div className='features'>
                <div className='feature1'>
                  <div className='feature12'><div className='featureicon'><FontAwesomeIcon icon={faRocket} /></div>         <div className='feature121'>Career Exploration</div> </div>
                  <div className='feature13'>Access well-researched content on 550+ careers</div>
                  </div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                
              </div>
              <div className='features'>
                <div className='feature1'>
                  <div className='feature12'><div className='featureicon'><FontAwesomeIcon icon={faRocket} /> </div>         <div className='feature121'>Career Exploration</div> </div>
                  <div className='feature13'>Access well-researched content on 550+ careers</div>
                  </div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                
              </div>
              <div className='features'>
                <div className='feature1'>
                  <div className='feature12'><div className='featureicon'> <FontAwesomeIcon icon={faRocket} /></div>         <div className='feature121'>Career Exploration</div> </div>
                  <div className='feature13'>Access well-researched content on 550+ careers</div>
                  </div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                <div className='ftick'><FontAwesomeIcon icon={faCheck} /></div>
                
              </div>
          
            </div>
        );
    }
}

export default Pricing;