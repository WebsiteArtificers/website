"use client"
import './navbar.css'
import { LogoDark, DownArrow } from '../../icons/icons';
import { useState } from 'react'

export default function Navbar() {

    const [ isProductVisible, setProductIsVisible ] = useState(false);
    const [ isResourcesVisible, setResourcesIsVisible ] = useState(false);
    const [ isSolutionsVisible, setSolutionsIsVisible ] = useState(false);
    const [ isDisclaimerVisible, setDisclaimerVisible ] = useState(true);

    return (
        <nav className='navbar__sticky--container'>
            <div className={`navbar__disclaimer ${isDisclaimerVisible ? '' : 'hidden'}`} onClick={() => {setDisclaimerVisible(false);}}>
                <button className='navbar__disclaimer--button'>x</button>
                <h1 className='navbar__disclaimer--header'>Website is still in development. <span>Some functions may be unavailable.</span></h1>
            </div>
            <div className='navbar__container'>
                <a title='The Website Artificer Logo' className='navbar__link' href='/'>
                    <LogoDark/>
                </a>
                <div className='navbar__button--container' onMouseOver={() => {setProductIsVisible(true)}} onMouseOut={() => {setProductIsVisible(false)}}>
                    <button className='navbar__button'>
                        Product
                    </button>
                    <DownArrow />
                    <div className={`hidden__link--container ${isProductVisible ? '' : 'hidden'}`}>
                        <div className='hidden__link--subcontainer product'>
                            <h1 className='hidden__link--header'>Platform</h1>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Frontend</h2>
                                <p className='hidden__link--paragraph'>Your virtual storefront</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Data</h2>
                                <p className='hidden__link--paragraph'>Supercharge your business</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Backend</h2>
                                <p className='hidden__link--paragraph'>Secure manage your business</p>
                            </div>
                        </div>
                        <div className='hidden__link--subcontainer product'>
                            <h1 className='hidden__link--header'>Features</h1>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Increase Brand Presence</h2>
                                <p className='hidden__link--paragraph'>Drive customers to your site</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Capitalize On Opportunity</h2>
                                <p className='hidden__link--paragraph'>Find areas of growth</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Manage Your Brand</h2>
                                <p className='hidden__link--paragraph'>Visualize data and manage your business</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='navbar__button--container' onMouseOver={() => {setResourcesIsVisible(true)}} onMouseOut={() => {setResourcesIsVisible(false);}}>
                    <button className='navbar__button'>
                        Resources
                    </button>
                    <DownArrow />
                    <div className={`hidden__link--container ${isResourcesVisible ? '' : 'hidden'}`}>
                        <div className='hidden__link--subcontainer resources'>
                            <h1 className='hidden__link--header'>Discover</h1>
                            <a href='/blog'>
                                <div className='hidden__link--subcontainer__subcontainer'>
                                    <h2 className='hidden__link--subheader'>Blog</h2>
                                    <p className='hidden__link--paragraph'>Our weekly journey</p>
                                </div>
                            </a>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Newsletter Signup</h2>
                                <p className='hidden__link--paragraph'>Never miss out on a blog</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Partners</h2>
                                <p className='hidden__link--paragraph'>See who we work with</p>
                            </div>
                        </div>
                        <div className='hidden__link--subcontainer resources'>
                            <h1 className='hidden__link--header'>Assistance</h1>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Contact Customer Service</h2>
                                <p className='hidden__link--paragraph'>For any general assistance you need</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Technical Support</h2>
                                <p className='hidden__link--paragraph'>Talk to a tech nerd</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Talk to Sales</h2>
                                <p className='hidden__link--paragraph'>No slimy salesmen. We want to help</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='navbar__button--container' onMouseOver={() => {setSolutionsIsVisible(true)}} onMouseOut={() => {setSolutionsIsVisible(false);}}>
                    <button className='navbar__button'>
                        Solutions
                    </button>
                    <DownArrow />
                    <div className={`hidden__link--container ${isSolutionsVisible ? '' : 'hidden'}`}>
                        <div className='hidden__link--subcontainer solutions'>
                            <h1 className='hidden__link--header'>Use Cases</h1>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>E-Commerce</h2>
                                <p className='hidden__link--paragraph'>Sell your products online</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Marketing</h2>
                                <p className='hidden__link--paragraph'>Drive traffic with SEO and marketing</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Products and Services</h2>
                                <p className='hidden__link--paragraph'>Perfect for any business</p>
                            </div>
                        </div>
                        <div className='hidden__link--subcontainer solutions'>
                            <h1 className='hidden__link--header'>Integrations</h1>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Sanity</h2>
                                <p className='hidden__link--paragraph'>Your very own CMS</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Next.js</h2>
                                <p className='hidden__link--paragraph'>Amazing fullstack websites</p>
                            </div>
                            <div className='hidden__link--subcontainer__subcontainer'>
                                <h2 className='hidden__link--subheader'>Many More</h2>
                                <p className='hidden__link--paragraph'>See what goes into crafting your website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className='navbar__button' href="/pricing">
                    Pricing
                </a>
                <a className='navbar__button' href="/sign-in">
                    Sign In
                </a>
            </div>
        </nav>
    )
}