import './hamburgerMenu.css'
import { DownArrow } from "@/icons/icons"
import { Resources, Product } from './menus/menus';
import { useState } from 'react'

export default function SmallScreenMenu() {

    const [showProduct, setShowProduct] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [isRotatedProduct, setIsRotatedProduct] = useState(false);
    const [isRotatedSolution, setIsRotatedSolution] = useState(false);
    const [isRotatedResources, setIsRotatedResources] = useState(false);

    return (
        <div className='smallScreenMenu__container'>
            <div className='smallScreenMenu__top--container'>
                <a href='/sign-in'>
                    <button className='smallScreenMenu__top--button button__secondary'>Sign in</button>
                </a>
                <a href='/sign-in>
                    <button className='smallScreenMenu__top--button button__tertiary'>Get Started</button>
                </a>
                <a href='/contact/sales'>
                    <button className='smallScreenMenu__top--button button__quinary'>Contact Sales</button>
                </a>
                <a href='/pricing'>
                    <button className='smallScreenMenu__top--button button__quaternary'>Pricing</button>
                </a>
            </div>
            <div onClick={() => {
                setShowResources(!showResources)
                setShowSolution(false)
                setShowProduct(false)
                setIsRotatedResources(!isRotatedResources);
                setIsRotatedProduct(false);
                setIsRotatedSolution(false);
            }} className='smallScreenMenu__outer--container'>
                <div className={`smallScreenMenu__subcontainer ${isRotatedResources ? 'active__background' : ''}`}>
                    <button className='smallScreenMenu__button'>Resources</button>
                    <div className={isRotatedResources ? 'rotate' : ''}>
                        <DownArrow />
                    </div>
                </div>
                { showResources && <Resources /> }
            </div>
            <div onClick={() => {
                setShowProduct(!showProduct)
                setShowResources(false)
                setShowSolution(false)
                setIsRotatedProduct(!isRotatedProduct);
                setIsRotatedResources(false);
                setIsRotatedSolution(false);
            }} className='smallScreenMenu__outer--container'>
                <div className={`smallScreenMenu__subcontainer ${isRotatedProduct ? 'active__background' : ''}`}>
                    <button className='smallScreenMenu__button'>Product</button>
                    <div className={isRotatedProduct ? 'rotate' : ''}>
                        <DownArrow />
                    </div>
                </div>
                {showProduct && <Product /> }
            </div>
        </div>
    )
}
