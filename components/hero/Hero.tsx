"use client"
import './hero.css'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <div className='hero__container'>
            <h1 className='hero__header'>
                Make <motion.span className='hero__header--span' animate={{ background: 'var(--secondary)' }} initial={{ background: 0 }}>virtual real estate</motion.span>
            </h1>
            <motion.h2 className='hero__subheader' animate={{ opacity: 1 }} initial={{ opacity: 0 }}>your competitive advantage</motion.h2>
            <motion.p className='hero__paragraph' transition={{ delay: 1 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                Your online presence is a crucial part of your business. Let us make your website functional and scalable.
                <br></br>
                <br></br>
                <span>
                  Each of our plans costs much less than a dedicated, full-time, web developer or designer. A web developer can sometimes cost upwards of $100,000/year, and that doesn't even include benefits. We cost a fraction of that amount while offering the same capabilities.
                </span>
            </motion.p>
            <div className='hero__button--container'>
                <a href='/contact'>
                    <motion.button transition={{ delay: 1.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='hero__button button__primary'>
                        Contact Us
                    </motion.button>
                </a>
                <a href='/pricing'>
                    <motion.button transition={{ delay: 1.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='hero__button button__secondary'>
                        Subscription Plans
                    </motion.button>
                </a>
            </div>
        </div>
    )
}
