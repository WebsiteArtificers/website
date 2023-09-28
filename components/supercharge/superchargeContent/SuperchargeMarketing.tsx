import './superchargeContent.css'
import Image from 'next/image'

export default function Marketing() {
    return (
        <div className='supercharge__content--container'>
            <div className='supercharge__content--subcontainer left'>
                <Image className='supercharge__content--subcontainer__image' src='/images/marketing.jpeg' alt='' width={800} height={800}/>
            </div>
            <div className='supercharge__content--subcontainer right'>
                <p className='supercharge__content--subcontainer__paragraph'>Drive conversion, brand awareness, and customer retention with valuable experiences across checkpoints and interaction stages with your brand.</p>
                <ul className='supercharge__content--subcontainer__ul'>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Limitless landing page compositions</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Data-driven customer experience optimization</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Localized content for every presentation and interaction</li>
                </ul>
                <button className='supercharge__content--subcontainer__button button__secondary'>Learn More About Marketing</button>
            </div>
        </div>
    )
}