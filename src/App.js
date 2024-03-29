
import './App.css';

import Pointcard from './MVPpoints/Pointcard';
import Navbar from './Welcomepage/Navbar';
import Hero from './Welcomepage/Hero';
import Topnav from './Welcomepage/Topnav';
import ValuCard from './ValueCard/ValuCard';
import Pricing from './Pricing/Pricing';
import Faq from './FAQ/Faqmain';
function App() {
  return (
    <div>
      <Topnav/>
      <Navbar/>
 
      <Hero/>
   
     <ValuCard/>
     <Pointcard/>
     <Pricing/>
     <Faq/>
    </div>
  );
}

export default App;
