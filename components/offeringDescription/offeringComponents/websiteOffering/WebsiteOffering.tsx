import '.././websiteOffering.css'
import Image from 'next/image'

export default function WebsiteOffering() {
    return (
        <div className='websiteOffering__container'>
            <h1 className='websiteOffering__header'>The most flexible website platform</h1>
            <div className='websiteOffering__subcontainer'>
                <div className='websiteOffering__subcontainer--left'>
                    <p className='websiteOffering__left--paragraph'>
                        Artificer <a>Website Platform</a> provides business owners with custom tailored websites, matching the unique parts of your business. Your Platform acts as a key virtual hub for you and your customers to interact.
                    </p>
                    <ul className='websiteOffering__left--ul'>
                        <li className='websiteOffering__left--li'>
                        ✓ Extremely customizable and unique websites
                        </li>
                        <li className='websiteOffering__left--li'>
                        ✓ Amazing developer assistance
                        </li>
                        <li className='websiteOffering__left--li'>
                        ✓ Grows and scales with your business
                        </li>
                    </ul>
                    <a href='/platform'>
                        <button className='websiteOffering__left--button button__primary'>Explore Website Platforms</button>
                    </a>
                </div>
                <div className='websiteOffering__subcontainer--right'>
                    <Image width={2000} height={2300} src='/images/website.png' alt='Picture of a website designed by Website Artificers' className='websiteOffering__right--image' />
                </div>
            </div>
        </div>
    )
}
