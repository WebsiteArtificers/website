"use client"
import './definition.css'
import { motion } from 'framer-motion'

export default function Definition() {
    return (
        <div className='definition__container'>
            <div className='definition__left'>
                <motion.h1 transition={{ delay: 1 }} viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='definition__header'>ar-tif-i-cer</motion.h1>
                <motion.p transition={{ delay: 2 }} viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='definition__paragraph'>/ärˈtifəsər/</motion.p>
                <div className='definition__subcontainer'>
                    <motion.p transition={{ delay: 2 }} viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='definition__subcontainer--noun'><i>noun</i></motion.p>
                    <motion.div transition={{ delay: 3 }} viewport={{ once: true }} initial={{ background: 0}} whileInView={{ background: 'var(--secondary'}} className='definition__archaic--container'>
                        <motion.p transition={{ delay: 2 }} viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='definition__subcontainer--archaic'>ARCHAIC</motion.p>
                    </motion.div>
                </div>
                <motion.p transition={{ delay: 2 }} viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='definition__definition'>a skilled craftsman or inventor.</motion.p>
            </div>
            <motion.div className='definition__right' transition={{ delay: 3 }} viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <motion.h1 transition={{ delay: 3 }} initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} className='definition__right--header'>Craftsmanship</motion.h1>
                <motion.p transition={{ delay: 4 }} initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} className='definition__right--paragraph'>
                    It's what we are known for. It's what we strive for. We take pride in the virtual art that we create. We craft websites that enhance and support your brand.
                </motion.p>
            </motion.div>
        </div>
    )
}