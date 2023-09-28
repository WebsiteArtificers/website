import './superchargeContent.css'
import Image from 'next/image'

export default function Seo() {
    return (
        <div className='supercharge__content--container'>
            <div className='supercharge__content--subcontainer left'>
                <Image className='supercharge__content--subcontainer__image' src='/images/seo.png' alt='' width={800} height={800}/>
            </div>
            <div className='supercharge__content--subcontainer right'>
                <p className='supercharge__content--subcontainer__paragraph'>Rank higher in search engines and increase visibility for your enterprise.</p>
                <ul className='supercharge__content--subcontainer__ul'>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Blazing fast website speeds</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Keyword research and content generation</li>
                    <li className='supercharge__content--subcontainer__list'><span>✓</span> Increased website visibility and performance</li>
                </ul>
                <button className='supercharge__content--subcontainer__button button__secondary'>Learn More About SEO</button>
            </div>
        </div>
    )
}