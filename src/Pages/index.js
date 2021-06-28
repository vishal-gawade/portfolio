import React , {useState} from 'react'
import About from '../components/AboutSection';
import Contact from '../components/ContactSection';
import Footer from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Work from '../components/WorkSection';
import { animateScroll as scroll } from 'react-scroll';
const Home = () => {
    const [isOpen, setIsOpen]= useState(false);

    const toggle = ()=>  setIsOpen(!isOpen);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} toggleHome={toggleHome}/>
            <HeroSection/>
            <About/>
            <Work/>
            <Contact/>
            <Footer toggleHome={toggleHome}/>
        </>
    )
}

export default Home;
