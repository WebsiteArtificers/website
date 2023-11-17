import './salesComponents.css'

export default function SalesLeft() {
    return (
        <div className='salesLeft__container'>
            <ul className='salesLeft__ul'>
                <li className='salesLeft__list'>✓ See how the Website Artificers improves technological efficiency, increases brand recognition, and future-proofs your business</li>
                <li className='salesLeft__list'>✓ We'll walk you through the steps of how we onboard each customer</li>
                <li className='salesLeft__list'>✓ Learn about our Professional and Standard plans, their features, pricing, terms and conditions, and our dedicated support</li>
                <li className='salesLeft__list'>✓ Get introduced to our productized services and learn about our unique business model</li>
            </ul>
            <div className='salesLeft__subcontainer'>
                <a className='salesLeft__link' href='/contact/technical'>
                    <h3 className='salesLeft__link--subheader'>Technical support</h3>
                    <p className='salesLeft__link--paragraph'>Get help from the nerds on our Artificer team and our dedicated community.</p>
                </a>
                <a className='salesLeft__link' href='/contact/account'>
                    <h3 className='salesLeft__link--subheader'>Account support</h3>
                    <p className='salesLeft__link--paragraph'>Get help with billing, plans, management, and assistance for clients.</p>
                </a>
            </div>
        </div>
    )
}
