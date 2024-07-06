import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Banner from './components/Body/Banner';
import About from './components/Body/About';
import Services from './components/Body/Services';
import Portfolio from './components/Body/Portfolio';
import Skills from './components/Body/Skills';
import CTA from './components/Body/CTA';
import Contact from './components/Body/Contact';

import Footer from './components/Footer';
import Testimonial from './components/Body/Testimonial';

function App() {


  
  return (
    <div className="App bg-black">
      <Header/>
      <Banner/>
      <About/>  
      <Skills/>;
      <Services/>
      <CTA/>
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
