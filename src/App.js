import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Fuel from './components/fuel/Fuel';
import HeroSlider from './components/heroslider/HeroSlider';
import Navbar from './components/navbar/Navbar';
import Reviews from './components/review/Review';
import Staff from './components/staff/Staff';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Fuel/>
      <HeroSlider/>
      <Reviews/>
      <Staff/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
