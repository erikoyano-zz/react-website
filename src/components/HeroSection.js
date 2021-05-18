import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import {HiOutlineLightBulb} from 'react-icons/hi';
import Fade from 'react-reveal/Fade'

function HeroSection() {
    return (
        <div className='hero-container' id='home'>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <Fade bottom duration={4000}>
            <h1>INSPIRE MOM <HiOutlineLightBulb /> </h1>
                <p>インスパイア・ママ</p>
            
                <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        GET STARTED
                    </Button>
                    <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                        WATCH TRAILER
                    </Button>
                </div>
                    </Fade>
        </div>
    )
}

export default HeroSection
