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
            <a className='contact__link'>
                <div className='contact__svg--container'>
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
    </div>
}