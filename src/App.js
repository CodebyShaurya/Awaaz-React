import Nav from './Components/Navbar/Nav';
import Content from './Components/Content/Content';
import Features from './Components/Features/features';
import About from './Components/About/About';
import Account from './Components/Account Div/Account_div';
import Ytlink from './Components/ytlink/ytlink';
import Testimonials from './Components/Testimonials/testimonials';
import Contact from './Components/Contact Us/Contact Us';
import Footer from './Components/Footer/footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Content/>
        <Features/>
        <About/>
        <Account/>
        <Ytlink/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
