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
                Your website is a crucial part of your business. Let us make your website functional and scalable. Let yourself have peace of mind.
            </motion.p>
            <div className='hero__button--container'>
                <motion.button transition={{ delay: 1.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='hero__button button__primary'>
                    Contact Sales
                </motion.button>
                <motion.button transition={{ delay: 1.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='hero__button button__secondary'>
                    Our Expertise
                </motion.button>
            </div>
        </div>
    )
}