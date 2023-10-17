import React from 'react'
import Header from './Header'
import heroImg from '../img/header.png'

import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
  return (
    <section id='hero'>
        <Header />

        <div className='hero-container'>

        <div className='hero-img-container'>
                <img src={heroImg} alt='Ibrahim Atomanson'>
                </img>
            </div>
            <div className='hero-text-container'>
                <p>Hello, my name is</p>
                <h1 className='hero-name'>Ibrahim Atomanson.</h1>
                <h3 className='hero-roles'>Software Engineering | Data Science |Tech Consultancy</h3>
                <div className='hero-contact-icons'>
                  <a href='https://github.com/Iatoman' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                  <a href='https://www.linkedin.com/in/iatomanson/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                </div>
            </div>
            
        </div>
      
    </section>
  )
}

export default Hero
