import '.././websiteOffering.css'
import Image from 'next/image'

export default function BackendOffering() {
    return (
        <div className='websiteOffering__container'>
            <h1 className='websiteOffering__header'>Your virtual warehouse for content and analytics</h1>
            <div className='websiteOffering__subcontainer'>
                <div className='websiteOffering__subcontainer--left'>
                    <p className='websiteOffering__left--paragraph'>
                        Artificer <a>Backend Dashboard</a> organizes your brand around one center.
                        Analytics are taken from the frontend website and stored here for you to visualize and act upon.
                        Content is created here, stored here, and sent to your frontend for your audience to consume.
                    </p>
                    <ul className='websiteOffering__left--ul'>
                        <li className='websiteOffering__left--li'>
                        ✓ Fully hosted on the cloud keeping data safe and accessible
                        </li>
                        <li className='websiteOffering__left--li'>
                        ✓ We handle the setup and the code, so you can focus on content and analytics
                        </li>
                        <li className='websiteOffering__left--li'>
                        ✓ Visualize areas of potential growth and competitive opportunity
                        </li>
                    </ul>
                    <a href='/platform'>
                        <button className='websiteOffering__left--button button__primary'>Explore Backend Dashboard</button>
                    </a>
                </div>
                <div className='websiteOffering__subcontainer--right'>
                    <Image width={2000} height={2300} src='/images/backend-picture.png' alt='Picture of a backend dashboard provided by Website Artificers' className='websiteOffering__right--image' />
                </div>
            </div>
        </div>
    )
}
