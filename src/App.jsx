import {useEffect, useState} from 'react';

import Header from "./components/header/Header"
import './App.css';
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from "./components/UI/Services";
import About from "./components/UI/About";
import Team from "./components/UI/Team";
import Blog from "./components/UI/Blog";
import Testimonials from "./components/UI/Testimonials";
import Newsletter from "./components/UI/Newsletter";
import Footer from "./components/footer/Footer";
const App =()=> {
  const [theme, setTheme] = useState('');
  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('');
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  return (
    <>
     <Header theme={theme} toggleTheme={toggleTheme}/>
     <Hero/>
     <Counter/>
     <Services/>
     <About/>
     <Team/>
     <Blog/>
     <Testimonials/>
     <Newsletter/>
     <Footer/>
    </>
  )
}

export default App
