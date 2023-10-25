import  Header  from "./Components/Header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

import './styles/styles.css';
import './js/custom.js';
function App() {
  return (
    <>
    <Home />
    <About />
    <Contact />
    <Portfolio />
    <Nav />
    </>
  );
}

export default App;
