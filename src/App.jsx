import Header from "./components/header/Header"
import './App.css';
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from "./components/UI/Services";
import About from "./components/UI/About";
const App =()=> {

  return (
    <>
     <Header/>
     <Hero/>
     <Counter/>
     <Services/>
     <About/>
    </>
  )
}

export default App
