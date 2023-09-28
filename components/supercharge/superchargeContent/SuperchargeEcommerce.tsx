import './superchargeContent.css'
import Image from 'next/image'

export default function Ecommerce() {
    return (
        <div className='supercharge__content--container'>
            <div className='supercharge__content--subcontainer left'>
                <Image className='supercharge__content--subcontainer__image' src='/images/ecommerce.jpeg' alt='' width={800} height={800}/>
            </div>
            <div className='supercharge__content--subcontainer right'>
                <p className='supercharge__content--subcontainer__paragraph'>Convert more customers and drive more lifetime value by crafting incredible online store experiences.</p>
                <ul className='supercharge__content--subcontainer__ul'>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Unite brand content across all sources</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Personalize consumer experience</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Go beyond storefront templates the Artificer way!</li>
                </ul>
                <button className='supercharge__content--subcontainer__button button__secondary'>Learn More About E-Commerce</button>
            </div>
        </div>
    )
}