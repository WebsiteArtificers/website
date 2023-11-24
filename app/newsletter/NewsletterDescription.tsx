import './newsletter.css'

export default function NewsletterDescription() {
    return <div className='newsletter__subcontainer'>
            <h2 className='newsletter__subcontainer--header'><span>Our unique insights,</span> exclusive to our community</h2>
            <h3 className='newsletter__subcontainer--subheader'>here is what you get with our newsletter</h3>
            <div className='newsletter__subcontainer--wrapper'>
                <div className='newsletter__wrapper'>
                    <h4 className='newsletter__wrapper--header'>Frequency</h4>
                    <h5 className='newsletter__wrapper--subheader'>Weekly, biweekly, monthly, or yearly.</h5>
                    <p className='newsletter__wrapper--paragraph'>You decide and you can always unsubscribe. We want to provide value, and we don't want our members to feel like they're being flooded with information.</p>
                </div>
                <div className='newsletter__wrapper'>
                    <h4 className='newsletter__wrapper--header'>Exclusive</h4>
                    <h5 className='newsletter__wrapper--subheader'>The information found in the newsletters is unique.</h5>
                    <p className='newsletter__wrapper--paragraph'>The information we share in the newsletter cannot be found anywhere else. Not in our blogs, not on our social medias, nor through any other mode of communication. Our community is exclusive.</p>
                </div>
                <div className='newsletter__wrapper'>
                    <h4 className='newsletter__wrapper--header'>Information</h4>
                    <h5 className='newsletter__wrapper--subheader'>Our more in-depth insights</h5>
                    <p className='newsletter__wrapper--paragraph'>We cover in-depth information ranging across a variety of online topics from website development, to online marketing, to search engine optimization.</p>
                </div>
                <div className='newsletter__wrapper'>
                    <h4 className='newsletter__wrapper--header'>Value</h4>
                    <h5 className='newsletter__wrapper--subheader'>Deals, webinars, courses, and more.</h5>
                    <p className='newsletter__wrapper--paragraph'>We may occasionally share deals exclusively with our newsletter members along with exclusive webinars and courses for various online subjects like SEO, marketing, and programming.</p>
                </div>
            </div>
        </div>
}