import './techSupportComponents.css'

export default function TechSupportLeft() {
    return (
        <div className='techSupportLeft__container'>
            <ul className='techSupportLeft__ul'>
                <li className='techSupportLeft__list'>✓ Need a quick tech answer? Check out our <a href='/faq'>Frequently Asked Questions</a> page to find answers quickly</li>
                <li className='techSupportLeft__list'>✓ We'll walk you through the problem with you until it's solved. No holding, and minimal waiting</li>
                <li className='techSupportLeft__list'>✓ Get tech support for both of our Professional and Standard plans to keep your company moving</li>
                <li className='techSupportLeft__list'>✓ Have you checked out our extensive <a href='/blogs'>Blogs</a> and <a href='/documentation'>Documentation</a>?</li>
            </ul>
            <div className='techSupportLeft__subcontainer'>
                <a className='techSupportLeft__link' href='/contact/sales'>
                    <h3 className='techSupportLeft__link--subheader'>Sales Team</h3>
                    <p className='techSupportLeft__link--paragraph'>Ask us questions about our productized service design and how it can benefit your business.</p>
                </a>
                <a className='techSupportLeft__link' href='/contact/customer-service'>
                    <h3 className='techSupportLeft__link--subheader'>Account support</h3>
                    <p className='techSupportLeft__link--paragraph'>Get help with billing, plans, management, and assistance for clients.</p>
                </a>
            </div>
        </div>
    )
}
