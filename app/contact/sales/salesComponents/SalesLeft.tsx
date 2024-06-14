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
                <a className='salesLeft__link' href='/pricing'>
                    <h3 className='salesLeft__link--subheader'>Pricing</h3>
                    <p className='salesLeft__link--paragraph'>See and compare our list of affordably-priced services. We strive for excellence and value.</p>
                </a>
                <a className='salesLeft__link' href='/sign-in'>
                    <h3 className='salesLeft__link--subheader'>Sign Up</h3>
                    <p className='salesLeft__link--paragraph'>Interested in working with us? Create an account with us!</p>
                </a>
            </div>
        </div>
    )
}
