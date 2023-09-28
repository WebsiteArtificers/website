"use client"
import './pricing.css'
import { Logo } from '../../icons/icons'
import { useState, useEffect } from 'react'

export default function Pricing() {
    const word = ['business', 'barber', 'restaurant', 'shop',
                  'bank', 'influencer', 'e-commerce brand',
                  'cafe', 'brewery', 'gym', 'spa', 'manufacturer',
                  'mover', 'artist', 'creator', 'charity', 'farm',
                  'roofer', 'contractor', 'builder', 'landscaper',
                  'church', 'school', 'university', 'entrepreneur']
    
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    function changeWord() {
        setCurrentWordIndex((prevIndex) => {
            let newIndex = prevIndex + direction;
      
            if (newIndex >= word.length) {
              newIndex = 0;
              setDirection(-1);
            } else if (newIndex < 0) {
              newIndex = 1;
              setDirection(1);
            }
      
            return newIndex;
          })
    }

    useEffect(() => {
        const intervalId = setInterval(changeWord, interval())
    
        return () => clearInterval(intervalId)
    });

    function interval() {
        const time = 3000

        return time
    }

    const currentWord = word[currentWordIndex]

    return (
        <div className='pricing__container'>
            <div className='pricing__subcontainer logo'>
                <Logo />
            </div>
            <h1 className='pricing__header'>Need website assistance?</h1>
            <div className='pricing__subcontainer'>
                <div className='pricing__subcontainer--subcontainer__right'>
                    <h2 className='pricing__subcontainer--subheader'>| Schedule a call <span className='pricing__subcontainer--subheader__span'>for just $50</span></h2>
                    <p className='pricing__subcontainer--paragraph'>Discuss your unique business needs without breaking the bank, <span className='pricing__subcontainer--paragraph__span'>or contact us free of charge.</span></p>
                    <div className='pricing__subcontainer--button'>
                        <button className='pricing__button button__secondary'>Schedule Call</button>
                        <button className='pricing__button button__tertiary'>Contact Us</button>
                    </div>
                </div>
                <div className='pricing__subcontainer--subcontainer__left'>
                    <h2 className='pricing__subcontainer--subheader'>| Pricing built <span className='pricing__subcontainer--subheader__span'>for every {currentWord}</span></h2>
                    <p className='pricing__subcontainer--paragraph'>Website Artificers has offerings for every kind of website, <span className='pricing__subcontainer--paragraph__span'>regardless of size and scale.</span></p>
                    <div className='pricing__subcontainer--button'>
                        <button className='pricing__button button__secondary'>Get Pricing</button>
                    </div>
                </div>
            </div>
        </div>
    )
}