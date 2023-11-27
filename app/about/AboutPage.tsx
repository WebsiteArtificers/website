import './about.css'
import Image from 'next/image'
import Mission from './Mission'
import Values from './Values'
import { Magic } from '@/components/components'

export default function AboutPage() {
    return <div className='about__container'>
        <div className='about__top--container'>
            <div className='about__left--subcontainer'>
                <h1 className='about__left--header'><span>The Website Artificers.</span> See what we're all about.</h1>
                <p className='about__left--paragraph'>Efficiently and <a className='about__left--link' href='/pricing'>affordably</a> delivering custom website and online service solutions to companies in any sector, in any location.</p>
                <div className='about__left--button__container'>
                    <a href='/contact'>
                        <button className='about__left--button button__primary'>Contact us</button>
                    </a>
                    <a href='/pricing'>
                        <button className='about__left--button button__secondary'>Pricing</button>
                    </a>
                </div>
            </div>
            <div className='about__right--subcontainer'>
                <div className='about__right--image__container'>
                    <div className='about__right--image__subcontainer about__container--one'>
                        <a href='/services/seo'>
                            <Image className='about__right--image' width={200} height={200} alt='Search Engine Optimization' src='/images/aboutSEO.jpg'/>
                            <button className='about__right--button about__button--one'>SEO</button>
                        </a>
                    </div>
                    <div className='about__right--image__subcontainer about__container--two'>
                        <a href='/services/marketing'>
                            <Image className='about__right--image' width={200} height={200} alt='Online Marketing' src='/images/aboutMarketing.jpg'/>
                            <button className='about__right--button about__button--two'>Marketing</button>
                        </a>
                    </div>
                    <div className='about__right--image__subcontainer about__container--three'>
                        <a href='/services/development'>
                            <Image className='about__right--image' width={200} height={200} alt='Software and Website Development' src='/images/aboutProgramming.jpg'/>
                            <button className='about__right--button about__button--three'>Development</button>
                        </a>
                    </div>
                    <div className='about__right--image__subcontainer about__container--four'>
                        <a href='/services/design'>
                            <Image className='about__right--image' width={200} height={200} alt='Design' src='/images/aboutDesign.jpg'/>
                            <button className='about__right--button about__button--four'>Design</button>
                        </a>
                    </div>
                </div>
                <a className='about__right--link' href='/services'>
                    <button className='about__right--link__button button__primary'>Our services</button>
                </a>
            </div>
        </div>
        <Mission />
        <Values />
        <Magic />
    </div>
}