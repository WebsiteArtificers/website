import Image from 'next/image';
import './data.css'

export default function DataPage() {
    return (
        <div className='data__container'>
            <h1 className='data__header'>Artificer Data Analytics</h1>
            <h3 className='data__subheader'>
                Unleash you brand's potential with our enhanced data and analytics. Gain customer insight and identify areas of growth within your business.
            </h3>
            <p className='data__paragraph'>
                Analyse the behavior of your customers and effectively target and deploy your marketing campaigns and resources in the right places. It's amazing what you campaigns
                do when you have the right information. We take that information from your frontend and send it to your backend for you to visualize and act upon.
            </p>
            <div className='data__button--container'>
                <a className='data__button--link'>
                    <button className='data__button button__tertiary'>Contact Sales</button>
                </a>
                <a className='data__button--link'>
                    <button className='data__button button__primary'>Pricing</button>
                </a>
            </div>
            <Image alt='Picture of a beautiful website designed by the Website Artificers.' height={400} width={400} src='/images/dataWebsiteDesign.jpg' className='data__image' />
            <div className='data__columns--container'>
                <div className='data__columns--subcontainer'>
                    <h3 className='data__columns--header'>
                        Supercharge your efficiency
                    </h3>
                    <p className='data__columns--paragraph'>
                        Figure out what is working for your brand and what isn't. It's difficult to deploy your resources accurately when you're not 100% sure what's working.
                        It's one thing to have a website, and it's a completely different thing to have a website that has data collection integrated into it. We create websites that are simply the best.
                    </p>
                </div>
                <div className='data__columns--subcontainer'>
                    <h3 className='data__columns--header'>
                        Find areas for improvement
                    </h3>
                    <p className='data__columns--paragraph'>
                        With the increased efficiency in your business, you can find areas of meaninful improvement and investment within your business.
                        You can see what's working and what isn't. You can see what's bringing in customers and what isn't. You can see what's making you money and what isn't.
                        The modern business world depends on data.
                    </p>
                </div>
                <div className='data__columns--subcontainer'>
                    <h3 className='data__columns--header'>
                        Target the right customers
                    </h3>
                    <p className='data__columns--paragraph'>
                        How do you know you're selling to the right customers if you're not collecting data on who your most popular customers are?
                        The largest companies know the customer that they are targetting and selling to more than anyone else.
                        We give you the same insights that allow you to compete with the big guys.
                    </p>
                </div>
            </div>
        </div> 
    )
}
