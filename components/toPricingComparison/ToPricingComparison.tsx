import './toPricingComparison.css'

export default function ToPricingComparison() {
    return (
        <div className='toPricingComparison__container'>
            <p className='toPricingComparison__paragraph'>
                Compare our plans and <span>choose the one that fits your needs.</span>
            </p>
            <p className='toPricingComparison__subparagraph'>
                If you already have an account, sign in to access your dashboard, or create an account if you do not have one.
            </p>
            <div className='toPricingComparison__subcontainer'>
                <a href='/pricing'>
                    <button className='toPricingComparison__button button__tertiary'>About our plans</button>
                </a>
                <a href='/sign-in'>
                    <button className='toPricingComparison__button button__quaternary'>Sign in or sign up</button>
                </a>
            </div>
        </div>
    )
}