import './menus.css'

export default function Resources() {
    return (
        <div className='hamburgerMenu__container'>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Discover</h1>
                <a className='hamburgerMenu__subcontainer--link' href='/blog'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Blog</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Our weekly journey</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link' href='/contact/affiliates'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Affiliates</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Who we work with and trust</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Newsletter Sign-Up</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Never miss out on a blog</p>
                </a>
            </div>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Assistance</h1>
                <a className='hamburgerMenu__subcontainer--link' href='/contact/customer-service'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Contact Customer Service</h2>
                    <p className='hamburgerMenu__subcontainer--description'>For any general assistance you need</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link' href='/contact/tech-support'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Technical Support</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Talk to a tech nerd</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link' href='/about'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>About Us</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Excellence and passion is at our core</p>
                </a>
            </div>
        </div>
    )
}