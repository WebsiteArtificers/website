import './pricingComparison.css'

export default function PricingComparison() {
    return (
        <div className='pricingComparison__container'>
            <h2 className='pricingComparison__header'>Compare Plans</h2>
            <div className='pricingComparison__subcontainer'>
                    <h2 className='pricingComparison__plan--header top__row--header' data-left-column>Plans</h2>
                    <h2 className='pricingComparison__plan--header top__row--header'>Standard</h2>
                    <h2 className='pricingComparison__plan--header top__row--header'>Professional</h2>

                    <h2 className='pricingComparison__plan--header' data-left-column >Pricing</h2>
                    <h3 className='pricingComparison__plan--subheader'>$50<span>/per month</span></h3>
                    <h3 className='pricingComparison__plan--subheader'>$100<span>/per month</span></h3>

                    <h2 className='pricingComparison__plan--header' data-left-column >Requests at a Time</h2>
                    <h3 className='pricingComparison__plan--subheader'>1</h3>
                    <h3 className='pricingComparison__plan--subheader'>2</h3>

                    <h2 className='pricingComparison__plan--header' data-left-column >Delivery Time</h2>
                    <h3 className='pricingComparison__plan--subheader'>48 <span>hours</span></h3>
                    <h3 className='pricingComparison__plan--subheader'>24 <span>hours</span></h3>

                    <h2 className='pricingComparison__plan--header' data-left-column >Max Website Size</h2>
                    <h3 className='pricingComparison__plan--subheader'>20 <span>pages</span></h3>
                    <h3 className='pricingComparison__plan--subheader'>Unlimited</h3>

                    <h2 className='pricingComparison__plan--header' data-left-column >Our Available Services</h2>
                    <h3 className='pricingComparison__plan--subheader'>Web Development, SEO</h3>
                    <h3 className='pricingComparison__plan--subheader'>Web Development, Design, Marketing, SEO, and more</h3>

                    <h2 className='pricingComparison__plan--header' data-left-column >Pause Feature</h2>
                    <h3 className='pricingComparison__plan--subheader'>✓</h3>
                    <h3 className='pricingComparison__plan--subheader'>✓</h3>

                    <h2 className='pricingComparison__plan--header' data-left-column >Easy Credit Card payments</h2>
                    <h3 className='pricingComparison__plan--subheader'>✓</h3>
                    <h3 className='pricingComparison__plan--subheader'>✓</h3>
 
                    <h2 className='pricingComparison__plan--header' data-left-column >Cancel Anytime</h2>
                    <h3 className='pricingComparison__plan--subheader'>✓</h3>
                    <h3 className='pricingComparison__plan--subheader'>✓</h3>
            </div>
        </div>
    )
}
