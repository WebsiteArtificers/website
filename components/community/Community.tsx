import './community.css'

export default function Community() {
    return (
        <div className="community__container">
            <h2 className='community__subheader'>Join a vibrant community of Artificers</h2>
            <h1 className='community__header'>crafting the <span>future of virtual business</span></h1>
            <div className='community__subcontainer'>
                <a className='community__subcontainer--link'>
                    <h1 className='community__subcontainer--header join__us'>Join us</h1>
                    <p className='community__subcontainer--paragraph'>
                        The Website Artificers are not just a solution to your business issues. We're a community and a movement of Artificers that take pride in our craft and the value we provide to the evolving business world.
                    </p>
                    <button className='community__subcontainer--button button__tertiary'>Join the Artificer Community</button>
                </a>
                <a className='community__subcontainer--link'>
                    <h1 className='community__subcontainer--header be__amazed'>Be amazed</h1>
                    <p className='community__subcontainer--paragraph'>
                        See how our teams of Artificers build remarkable experience for our business partners with amazingly unique, customizable experiences that meet your unique business needs and values.
                    </p>
                    <button className='community__subcontainer--button button__tertiary'>Explore our projects</button>
                </a>
                <a className='community__subcontainer--link'>
                    <h1 className='community__subcontainer--header dive__deeper'>Dive deeper</h1>
                    <p className='community__subcontainer--paragraph'>
                        We're tired of the templated, one size fits all, website design mentality. Our business has never fit into a box and neither does yours. We take pride in enhancing your brand and showcasing it.
                    </p>
                    <button className='community__subcontainer--button button__tertiary'>Learn about the Artificer Way</button>
                </a>
            </div>
            <div className='community__subcontainer'>
                <a className='community__subcontainer--link'>
                    <h1 className='community__subcontainer--header stay__updated'>Stay updated</h1>
                    <p className='community__subcontainer--paragraph'>
                        Stay up-to-date on Artificer news, and go behind the scenes of our product development. We're passionate about our work and love sharing how we do it. That's the Artificer Way.
                    </p>
                    <button className='community__subcontainer--button button__tertiary'>Sign up for newsletter</button>
                </a>
                <a className='community__subcontainer--link'>
                    <h1 className='community__subcontainer--header creating__art'>Creating art</h1>
                    <p className='community__subcontainer--paragraph'>
                        Curious about what solutions we offer? Check out our customizable solutions for your brand or business to enhance your market presence online and supercharge your growth.
                    </p>
                    <button className='community__subcontainer--button button__tertiary'>See what our websites offer</button>
                </a>
            </div>
        </div>
    )
}