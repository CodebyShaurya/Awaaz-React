import Nav from './Components/Nav';
import Content from './Components/Content';
import Features from './Components/Features';
import About from './Components/About';
import Account from './Components/Account_div';
import Ytlink from './Components/Ytlink.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Contact from './Components/Contact_us.jsx';
import Footer from './Components/Footer'
import './App.css';


function App() {
  return (
      <div className="App">
        <Nav />
        <Content />
        <Features />
        <About />
        <Account />
        <Ytlink />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
