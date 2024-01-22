import './regularMenu.css'
import { DownArrow } from "@/icons/icons"
import { Product, Resources } from './menus/menus'
import { useState } from 'react'

export default function Regular() {

    const [showProduct, setShowProduct] = useState(false);
    const [showResources, setShowResources] = useState(false);

    return (
        <>
            <div
                className='regular__link--container'
                onMouseEnter={() => setShowProduct(true)}
                onMouseLeave={() => setShowProduct(false)}
                onClick={() => setShowProduct(!showProduct)}
            >
                <button className='regular__link'>Product</button>
                <DownArrow />
                { showProduct && <Product /> }
            </div>
            <div
                className='regular__link--container'
                onMouseEnter={() => setShowResources(true)}
                onMouseLeave={() => setShowResources(false)}
                onClick={() => setShowResources(!showResources)}
            >
                <button className='regular__link'>Resources</button>
                <DownArrow />
                { showResources && <Resources /> }
            </div>
            <a className='regular__link--container' href='/contact/sales'>
                <button className='regular__link'>Contact Sales</button>
            </a>
            <a className='regular__link--container' href='/pricing'>
                <button className='regular__link'>Pricing</button>
            </a>
            <div data-separate>
                <a className='regular__link--container' href='/sign-in'>
                    <button className='separate__link button__secondary'>Sign in</button>
                </a>
                <a className='regular__link--container'>
                    <button className='separate__link button__tertiary'>Get Started</button>
                </a>
            </div>
        </>
    )
}
