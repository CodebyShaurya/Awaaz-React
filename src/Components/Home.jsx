import React from "react";
import Nav from "./Nav";
import Content from "./Content";
import Features from "./Features"
import About from "./About";
import Account from "./Account_div";
import Ytlink from "./Ytlink";
import Testimonials from "./Testimonials";
import ContactUs from "./Contact_us";
import Footer from "./Footer";
import '../App.css';

const Home = () => {
    return (
        <>
            <Nav />
            <Content />
            <Features />
            <About />
            <Account />
            <Ytlink />
            <Testimonials />
            <ContactUs />
            <Footer />
        </>
    )
};

export default Home;