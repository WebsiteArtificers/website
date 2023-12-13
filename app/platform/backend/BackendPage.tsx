import './backend.css'
import Image from 'next/image'

export default function BackendPage() {
    return (
        <div className='backend__container'>
            <h1 className='backend__header'>Artificer Backend</h1>
            <h3 className='backend__subheader'>
                With your fully-secure backend, your website becomes more than just a website. It becomes a virtual headquarters for your business.
            </h3>
            <p className='backend__paragraph'>
                House and transfer data from your frontend to your backend using our advanced data analytics features. Write blogs and post content, along with keeping track of payments and updating customer information.
            </p>
            <div className='backend__button--container'>
                <a className='backend__button--link'>
                    <button className='backend__button button__tertiary'>Contact Sales</button>
                </a>
                <a className='backend__button--link'>
                    <button className='backend__button button__primary'>Pricing</button>
                </a>
            </div>
            <Image alt='Picture of a beautiful website designed by the Website Artificers.' height={400} width={400} src='/images/backendWebsiteDesign.jpg' className='backend__image' />
            <div className='backend__columns--container'>
                <div className='backend__columns--subcontainer'>
                    <h3 className='backend__columns--header'>
                        Manage Subscriptions and Payments
                    </h3>
                    <p className='backend__columns--paragraph'>
                        Tired of having to manually manage your subscriptions and payments? We've got you covered. We fully integrate our e-commerce backends with Stripe,
                        our preferred payment processor. With Stripe, we automate and handle everything for you, so you can set your preferences and watch the money roll in.
                    </p>
                </div>
                <div className='backend__columns--subcontainer'>
                    <h3 className='backend__columns--header'>
                        Write Content, Post Blogs, and Even Video
                    </h3>
                    <p className='backend__columns--paragraph'>
                        Our backend allows you to easily handle all of your content and creation needs. Need multiple people to work on your content and make sure it all gets posted?
                        No worries! We integrate all of our backends with a content management system called Sanity.io that meets all of your needs seemlessly.
                    </p>
                </div>
                <div className='backend__columns--subcontainer'>
                    <h3 className='backend__columns--header'>
                        Keep Track of Customer Information
                    </h3>
                    <p className='backend__columns--paragraph'>
                        See who your most popular customers are and what they're using your website for. See what products are working and what aren't.
                        Help tailor and optimize your frontend website to allow for the best user experience possible.
                    </p>
                </div>
            </div>
        </div>  
    )
}
