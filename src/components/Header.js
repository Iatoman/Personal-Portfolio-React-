import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomLink from './CustomLink';
import {faBars} from '@fortawesome/free-solid-svg-icons'





const Header = () => {
    const [menuOpen, toggleMenu] = useState(false);

     const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide the header
        document.getElementById('header').classList.remove('header-visible');
      } else {
        // Scrolling up, show the header
        document.getElementById('header').classList.add('header-visible');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  
    return (
      <header id='header' className={menuOpen?'header-menu-open header-visible':'header header-visible'}>
       
        <div className='nav-btn-container'>
          <FontAwesomeIcon icon={faBars} id='nav-mobile-btn' onClick={()=>{toggleMenu(!menuOpen)}}/>
          </div>
          <div className={menuOpen?'nav-menu-container-open':'nav-menu-container'}>
  

          <ul id='nav-menu'>
            <CustomLink to='hero' smooth={true} duration={1000} onClick={() => toggleMenu(false)}>
              Home
            </CustomLink>
            <CustomLink to='about' smooth={true} duration={1000} onClick={() => toggleMenu(false)}>
              About Me
            </CustomLink>
            <CustomLink to='portfolio' smooth={true} duration={1000} onClick={() => toggleMenu(false)}>
              Portfolio
            </CustomLink>
           
        </ul>
  
          </div>
      </header>
    )
  }

export default Header
