"use client"
import './supercharge.css'
import { useState } from 'react'
import { Ecommerce, Marketing, Media, Support, Seo } from './superchargeContent/superchargeComponents'


export default function Supercharge() {

    const [ marketingActive, setMarketingActive ] = useState(true)
    const [ ecommerceActive, setEcommerceActive ] = useState(false)
    const [ seoActive, setSeoActive ] = useState(false)
    const [ mediaActive, setMediaActive ] = useState(false)
    const [ supportActive, setSupportActive ] = useState(false)

    function handleMarketing() {
        setMarketingActive(true)

        setEcommerceActive(false)
        setSeoActive(false)
        setMediaActive(false)
        setSupportActive(false)
    }

    function handleEcommerce() {
        setEcommerceActive(true)

        setMarketingActive(false)
        setSeoActive(false)
        setMediaActive(false)
        setSupportActive(false)
    }

    function handleSeo() {
        setSeoActive(true)
        
        setMarketingActive(false)
        setEcommerceActive(false)
        setMediaActive(false)
        setSupportActive(false)
    }

    function handleMedia() {
        setMediaActive(true)

        setMarketingActive(false)
        setEcommerceActive(false)
        setSeoActive(false)
        setSupportActive(false)
    }

    function handleSupport() {
        setSupportActive(true)

        setMarketingActive(false)
        setEcommerceActive(false)
        setSeoActive(false)
        setMediaActive(false)
    }

    function displayHeader() {
        if (marketingActive) return <h2 className='supercharge__subcontainer--subheader'>Marketing <span className='supercharge__subcontainer--subheader__span'>engagement</span></h2>
        else if (ecommerceActive) return <h2 className='supercharge__subcontainer--subheader'>Richer <span className='supercharge__subcontainer--subheader__span'>commerce experiences</span></h2>
        else if (seoActive) return <h2 className='supercharge__subcontainer--subheader'>SEO <span className='supercharge__subcontainer--subheader__span'>rankings</span></h2>
        else if (mediaActive) return <h2 className='supercharge__subcontainer--subheader'>Immersive <span className='supercharge__subcontainer--subheader__span'>stories</span></h2>
        else if (supportActive) return <h2 className='supercharge__subcontainer--subheader'>Customer <span className='supercharge__subcontainer--subheader__span'>connection</span></h2>
        else return <h2 className='supercharge__subcontainer--subheader'>Marketing <span className='supercharge__subcontainer--subheader__span'>engagement</span></h2>
    }

    function displayContent() {
        if (marketingActive) return <Marketing />
        else if (ecommerceActive) return <Ecommerce />
        else if (seoActive) return <Seo />
        else if (mediaActive) return <Media />
        else if (supportActive) return <Support />
        else return <Marketing />
    }

    return (
        <div className='supercharge__container'>
            <h1 className='supercharge__header'>Website Artificers supercharge</h1>
            <div className='supercharge__subcontainer header__function'>
                {displayHeader()}
            </div>
            <div className='supercharge__subcontainer button__container'>
                <button onClick={handleMarketing} className={`supercharge__subcontainer--button ${marketingActive === true ? 'active' : ''} left`}>Marketing</button>
                <button onClick={handleEcommerce} className={`supercharge__subcontainer--button ${ecommerceActive === true ? 'active' : ''} left`}>E-Commerce</button>
                <button onClick={handleSeo} className={`supercharge__subcontainer--button ${seoActive === true ? 'active' : ''} center`}>SEO</button>
                <button onClick={handleMedia} className={`supercharge__subcontainer--button ${mediaActive === true ? 'active' : ''} right`}>Media</button>
                <button onClick={handleSupport} className={`supercharge__subcontainer--button ${supportActive === true ? 'active' : ''} right`}>Support</button>
            </div>
            <div className='supercharge__subcontainer content__function'>
                {displayContent()}
            </div>
        </div>
    )
}