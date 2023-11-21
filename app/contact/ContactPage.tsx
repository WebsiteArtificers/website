import './contact.css';
import { Sales, Partner, Account, Question } from '@/icons/icons'

export default function ContactPage() {
    return <div className='contact__container'>
        <h1 className='contact__header'>Contact Us</h1>
        <div className='contact__subcontainer'>
            <a className='contact__link'>
                <div className='contact__svg--container'>
                    <Question />
                </div>
                <h2 className='contact__link--header'>
                    Technical Support
                </h2>
                <p className='contact__link--paragraph'>
                    View our blogs and documentation, and get help from our nerds on the technical support team.
                </p>
                <h3 className='contact__link--subheader'>
                    Documentation and support
                </h3>
            </a>
            <a className='contact__link' href='/contact/sales'>
                <div className='contact__svg--container'>
                    <Sales />
                </div>
                <h2 className='contact__link--header'>
                    Sales
                </h2>
                <p className='contact__link--paragraph'>
                    Talk to our sales team about productized services, pricing, deliverables, what to expect, and so much more.
                </p>
                <h3 className='contact__link--subheader'>
                    Talk to a representative
                </h3>
            </a>
            <a className='contact__link'>
                <div className='contact__svg--container'>
                    <Account />
                </div>
                <h2 className='contact__link--header'>
                    Customer Support
                </h2>
                <p className='contact__link--paragraph'>
                    Get help with billing, account management, plans, user experience, and any other general questions you may have.
                </p>
                <h3 className='contact__link--subheader'>
                    Submit a request
                </h3>
            </a>
            <a className='contact__link partner__link'>
                <div className='partner__svg--container'>
                    <Partner />
                </div>
                <h2 className='contact__link--header'>
                    Affiliates
                </h2>
                <p className='contact__link--paragraph'>
                    Become an affiliate and earn money for every paying customer you refer to us. Check out this page for more information on our affiliate program.
                </p>
                <h3 className='contact__link--subheader'>
                    Submit an application
                </h3>
            </a>
        </div>
        <div className='contact__bottom--container'>
            <div className='contact__bottom--subcontainer'>
                <h3 className='contact__bottom--header'>Follow us on Facebook</h3>
                <p className='contact__bottom--paragraph'>Get the latest Artificer news, product updates and media resources at <a href='https://www.facebook.com/websiteartificers' target="_blank" rel="noopener noreferrer">www.facebook.com/websiteartificers</a>.</p>
            </div>
            <div className='contact__bottom--subcontainer'>
                <h3 className='contact__bottom--header'>Follow us on LinkedIn</h3>
                <p className='contact__bottom--paragraph'>See what we're up to, who we're working with, and our weekly journey at <a href='https://www.linkedin.com/company/website-artificers' target="_blank" rel="noopener noreferrer">www.linkedin.com/company/website-artificers</a>.</p>
            </div>
            <div className='contact__bottom--subcontainer'>
                <h3 className='contact__bottom--header'>Privacy, Security, and Service Terms</h3>
                <p className='contact__bottom--paragraph'>
                    Questions? email us at <a href='mailto:contact@websiteartificers.com' target="_blank" rel="noopener noreferrer">contact@websiteartificers.com</a>.
                </p>
                <p className='contact__bottom--paragraph'>
                    See overview of <a href='/privacy-policy' target="_blank" rel="noopener noreferrer">Security and Privacy Compliance</a>.
                </p>
                <p className='contact__bottom--paragraph'>
                    See overview of our <a href='/terms-of-service' target="_blank" rel="noopener noreferrer">Terms of Service Policy</a>.
                </p>
            </div>
        </div>
    </div>
}