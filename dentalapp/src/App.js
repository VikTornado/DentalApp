import React from "react";
import TopBar from "./Components/TopBar";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Contacts from "./Components/Contacts";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import SlickSlider from "./Components/SlickSlider";
import FormPage from "./Components/FormPage";

function App(props) {
    return (
        <div>
            <TopBar/>
            <Navbar/>
            <Hero/>
            <AboutUs/>
            <Gallery/>
            <SlickSlider state={props.state}/>
            <Contacts/>
            <FormPage/>
            <Footer/>
        </div>
    );
}

export default App;



// https://www.youtube.com/watch?v=UyYJjU4ZK0I
