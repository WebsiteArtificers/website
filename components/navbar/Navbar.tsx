"use client"
import './navbar.css'
import { useState, useEffect } from 'react'
import Hamburger from "./hamburgerMenu/HamburgerMenu"
import Regular from "./regularMenu/RegularMenu"
import SmallScreenMenu from './hamburgerMenu/SmallScreenMenu'
import { LogoDark } from "@/icons/icons"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    const [isScreenSmall, setScreenSmall] = useState<boolean>(false);
  
    const handleHamburgerClick = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      if (!isScreenSmall) {
        setIsOpen(false);
      }
    }, [isScreenSmall]);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (windowWidth !== null && windowWidth <= 1100) {
        setScreenSmall(true);
      } else {
        setScreenSmall(false);
      }
    }, [windowWidth]);

    return (
        <>
            <nav className='navbar__container'>
                <a className='navbar__logo--container' href='/' title='Click to go back to the home page.'>
                    <LogoDark />
                </a>
                <div className='navbar__links--container'>
                    {isScreenSmall ? <Hamburger isOpen={isOpen} onClick={handleHamburgerClick} /> : <Regular />}
                </div>
            </nav>
            {isOpen &&  <SmallScreenMenu /> }
        </>
    )
}