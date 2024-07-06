import React from 'react'
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from "framer-motion"
import NumberCounter from "number-counter"

const Hero = () => {
    const mobile = window.innerWidth<=768? true: false;
    const transition ={type: 'string', duration: 3}
  return (
    <div className="hero" id='home'>
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header />
            
            <div className="the-best-ad">
                <motion.div initial={{left: mobile ? "165px": "238px"}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'} }>
                    
                </motion.div>
                <span>The Best Fitness Club in the Town.</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape</span>
                    <span> Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In Here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' prefix="+" />
                    </span>
                    <span>Expert Coachs</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={978} start={900} delay='4' prefix='+' /> 
                    </span>
                    <span>Members Joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={10} delay='4' prefix="+" />
                    </span>
                    <span>Fitness Programs</span>
                </div>
            </div>

            <div className="hero-btn">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>
            <motion.div className='heart-rate' initial={{left: mobile ? "0" : "-22px"}}
                    whileInView={{left: mobile ? "-45px" : "110px"}}
                    transition={transition}>
                <img src={Heart} alt="" width='70px'/>
                <span>Heart Rate</span><span>116 bpm</span>
            </motion.div>
            <img src={hero_image} alt="" className='hero-image'/>
            <motion.img src={hero_image_back} alt="" className='hero-image-back'  
                    initial={{right: "11rem"}}
                    whileInView={{right: '20rem'}}
                    transition={transition}/>
            <motion.div className="calories" 
                    initial={{left: mobile ? "0" : "15rem"}}
                    whileInView={{left: mobile ? "": "-25rem"}}
                    transition={transition}
            >
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span><span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
