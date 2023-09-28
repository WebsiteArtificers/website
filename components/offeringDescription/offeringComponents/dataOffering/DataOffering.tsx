import '.././websiteOffering.css'
import Image from 'next/image'

export default function DataOffering() {
    return (
        <div className='websiteOffering__container'>
            <h1 className='websiteOffering__header'>Unmatched dataflow and analytics</h1>
            <div className='websiteOffering__subcontainer'>
                <div className='websiteOffering__subcontainer--left'>
                    <p className='websiteOffering__left--paragraph'>
                        Artificer <a>Data and APIs</a> unleashes the power of your business.
                        A sleek and beautiful website is important, but that's only part of what defines a functional website.
                        Data collection and analytics are becoming increasingly important in today's day and age.
                    </p>
                    <ul className='websiteOffering__left--ul'>
                        <li className='websiteOffering__left--li'>
                        ✓ Seamless and secure data flow throughout your website ecosystem
                        </li>
                        <li className='websiteOffering__left--li'>
                        ✓ The bridge between frontend and backend
                        </li>
                        <li className='websiteOffering__left--li'>
                        ✓ Store your data with a large variety of storage options
                        </li>
                    </ul>
                    <button className='websiteOffering__left--button button__primary'>Explore Data and APIs</button>
                </div>
                <div className='websiteOffering__subcontainer--right'>
                    <Image width={2000} height={2300} src='/images/data.JPG' alt='Picture of the various data opportunities presented by Website Artificers' className='websiteOffering__right--image' />
                </div>
            </div>
        </div>
    )
}