import './frontend.css'
import Image from 'next/image'

export default function FrontendPage() {
    return (
        <div className='frontend__container'>
            <h1 className='frontend__header'>Artificer Frontend</h1>
            <h3 className='frontend__subheader'>
                Unleash you brand's potential with a bespoke website. Gain customers and grow your following.
            </h3>
            <p className='frontend__paragraph'>
                Give your customers experiences as incredible as the things you sell. Customized to support any brand or business and 
                optimized using the latest techniques and tools available. Your website is developed and maintained by the best.
            </p>
            <div className='frontend__button--container'>
                <a className='frontend__button--link'>
                    <button className='frontend__button button__tertiary'>Contact Sales</button>
                </a>
                <a className='frontend__button--link'>
                    <button className='frontend__button button__primary'>Pricing</button>
                </a>
            </div>
            <Image alt='Picture of a beautiful website designed by the Website Artificers.' height={400} width={400} src='/images/websiteMainHomePage.png' className='frontend__image' />
            <div className='frontend__columns--container'>
                <div className='frontend__columns--subcontainer'>
                    <h3 className='frontend__columns--header'>
                        Make it yours
                    </h3>
                    <p className='frontend__columns--paragraph'>
                        We provide bespoke, rich, and expressive interfaces that are tailored to match and enhance your brand.
                        Our developers can tailor your website to meet the needs of your business, and to create an amazing experience with you customers.
                        If you like the website you are currently reading this message on, you will love what we can do for you.
                    </p>
                </div>
                <div className='frontend__columns--subcontainer'>
                    <h3 className='frontend__columns--header'>
                        Get more customers
                    </h3>
                    <p className='frontend__columns--paragraph'>
                        Our websites are optimized to grab the attention of new customers, keep the attention of existing customers, and keep them coming back.
                        Need to regularly update your website without things getting disorganized? We can help with that.
                        Need to add unique features and systems to your website? We can help with that too.
                        We've got you covered!
                    </p>
                </div>
                <div className='frontend__columns--subcontainer'>
                    <h3 className='frontend__columns--header'>
                        Sell with confidence
                    </h3>
                    <p className='frontend__columns--paragraph'>
                        It's hard to sell with confidence when your online presence doesn't align with your physical brand.
                        Your brand is like a bouquet of flowers. Your brand is unique and beautiful in it's own way,
                        but one bad flower can ruin the entire bouquet. Don't let your website be that bad flower for your brand.
                        Let us help you make it your superpower.
                    </p>
                </div>
            </div>
        </div>
    )
}
