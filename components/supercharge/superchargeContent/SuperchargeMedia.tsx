import './superchargeContent.css'
import Image from 'next/image'

export default function Media() {
    return (
        <div className='supercharge__content--container'>
            <div className='supercharge__content--subcontainer left'>
                <Image className='supercharge__content--subcontainer__image' src='/images/media.png' alt='' width={800} height={800}/>
            </div>
            <div className='supercharge__content--subcontainer right'>
                <p className='supercharge__content--subcontainer__paragraph'>Drive website traffic and subscribers with highly-curated, value-packed content.</p>
                <ul className='supercharge__content--subcontainer__ul'>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Reuse content and optimized for any channel</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Collaborate internally in real-time to ship stories faster</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Efficiently and intelligently manage image assets and intellectual property</li>
                </ul>
                <button className='supercharge__content--subcontainer__button button__secondary'>Learn More About Media</button>
            </div>
        </div>
    )
}