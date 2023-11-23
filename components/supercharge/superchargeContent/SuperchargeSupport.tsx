import './superchargeContent.css'
import Image from 'next/image'

export default function Support() {
    return (
        <div className='supercharge__content--container'>
            <div className='supercharge__content--subcontainer left'>
                <Image className='supercharge__content--subcontainer__image' src='/images/support.jpg' alt='' width={800} height={800}/>
            </div>
            <div className='supercharge__content--subcontainer right'>
                <p className='supercharge__content--subcontainer__paragraph'>Blazing fast customer support and developer response times empower our partners to operate their business with peace of mind.</p>
                <ul className='supercharge__content--subcontainer__ul'>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Regularly updated and improved unified repository of Q&As</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Rapid customer assistance to fix any issues that arise</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> We handle the code so that you don't have to</li>
                </ul>
                <a href='/contact'>
                    <button className='supercharge__content--subcontainer__button button__secondary'>Learn More About Our Support Team</button>
                </a>
            </div>
        </div>
    )
}