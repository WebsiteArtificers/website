import './customerServiceComponents.css'

export default function CustomerServiceLeft() {
    return <div className='customerServiceLeft__container'>
            <ul className='customerServiceLeft__ul'>
                <li className='customerServiceLeft__list'>✓ Need a quick answer? Check out our <a href='/faq'>Frequently Asked Questions</a> page to find answers quickly</li>
                <li className='customerServiceLeft__list'>✓ Want to make money and partner with us? Check out our <a href='/contact/affiliates'>Affiliates</a> page to see if you're qualified to partner with us</li>
                <li className='customerServiceLeft__list'>✓ Interested in one of our Standard or Professional plans? Contact our <a href='/contact/sales'>Sales Team</a> to learn more about our offerings.</li>
            </ul>
            <div className='customerServiceLeft__subcontainer'>
                <a className='customerServiceLeft__link' href='/contact/tech-support'>
                    <h3 className='customerServiceLeft__link--subheader'>Technical support</h3>
                    <p className='customerServiceLeft__link--paragraph'>Get help from the nerds on our Artificer team and our dedicated community.</p>
                </a>
                <a className='customerServiceLeft__link' href='/contact/sales'>
                    <h3 className='customerServiceLeft__link--subheader'>Sales</h3>
                    <p className='customerServiceLeft__link--paragraph'>Ask us questions about our productized service design and how it can benefit your business.</p>
                </a>
            </div>
        </div>
}