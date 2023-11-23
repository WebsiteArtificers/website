import './footer.css'
import { Logo } from '../../icons/icons'
import { Email, Facebook, Github, LinkedIn } from '../../icons/icons'

export default function Footer() {
    return (
        <div className="footer__container">
            <div className='footer__subcontainer logo'>
                <Logo />
            </div>
            <div className='footer__flex--container'>
                <div className='footer__subcontainer'>
                    <h1 className='footer__subcontainer--header product'>Product</h1>
                    <ul className='footer__subcontainer--ul'>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                Front End
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                Data
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                Backend
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                SEO
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer__subcontainer'>
                    <h1 className='footer__subcontainer--header resources'>Resources</h1>
                    <ul className='footer__subcontainer--ul'>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                Documentation
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link' href='/blog'>
                                Blog
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                Partners
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link' href='/pricing'>
                                Pricing
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link' href='https://calendly.com/websiteartificers' target="_blank" rel="noopener noreferrer">
                                Schedule a Meeting
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link' href='/contact/sales'>
                                Contect Sales
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer__subcontainer'>
                    <h1 className='footer__subcontainer--header company'>Company</h1>
                    <ul className='footer__subcontainer--ul'>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link' href='/contact/customer-service'>
                                Contact Customer Service
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                Terms of Service
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                Privacy Policy
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                Accessibility Statement
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer__subcontainer'>
                    <h1 className='footer__subcontainer--header stay__connected'>Stay Connected</h1>
                    <ul className='footer__subcontainer--ul'>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link' href='https://github.com/WebsiteArtificers' target="_blank" rel="noopener noreferrer">
                                <Github />GitHub
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link' href='https://www.facebook.com/websiteartificers' target="_blank" rel="noopener noreferrer">
                                <Facebook />Facebook
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link' href='https://www.linkedin.com/company/100337597/admin/feed/posts/' target="_blank" rel="noopener noreferrer">
                                <LinkedIn />LinkedIn
                            </a>
                        </li>
                        <li className='footer__subcontainer--li'>
                            <a className='footer__subcontainer--link'>
                                <Email />Newsletter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__bottom--container'>
                <h1 className='footer__bottom--header'>Crafted with passion by <a href='/'>Website Artificers</a> © 2023</h1>
            </div>
        </div>
    )
}