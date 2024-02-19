import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import Work from './components/work';
import Contact from './components/contact';
import Education from './components/education';
import Intro from './components/intro';
import Skills from './components/skills';
function App() {
  return (
    <>
    <Header/>
    <hr/>
    <Hero/>
    <hr />
    <Intro/>
    <hr />
    <Skills/>
    <hr />
    <Work/>
    <hr />
    <Education/>
    <hr />
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
