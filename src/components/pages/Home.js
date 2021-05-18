import React, {useEffect}from 'react'
import '../../App.css'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import Intro from '../Intro'


function Home() {
 

    return(
        <>
        <HeroSection />
        <Intro />  
        <Cards />
        <Footer />
        </>
    )
}

export default Home;