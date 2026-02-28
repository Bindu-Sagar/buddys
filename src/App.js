import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/pages/home/Home';
import Fuel from './components/fuel/Fuel';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import WhatWeOffer from './components/pages/whatweoffer/WhatWeOffer';
import FAQs from './components/pages/faqs/Faq';
import About from './components/pages/about/About';
import Contact from './components/contact/Contact';
import ScrollToTop from "./components/common/ScrollToTop";


function App() {
  return (
    <BrowserRouter basename="/buddys">
      <ScrollToTop />
      <Navbar />
      <Fuel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatweoffer" element={<WhatWeOffer />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
