import './pause.css'
import { PauseIcon } from '@/icons/icons'

export default function PausePage() {
    return (
        <div className='pause__container'>
            <div className='pause__subcontainer'>
                <div className='pause__subcontainer--left'>
                    <p className='pause__top--paragraph'><span>Website Artificers</span> Pause Feature</p>
                    <h1 className='pause__subcontainer--header'>Save your money</h1>
                    <h2 className='pause__subcontainer--subheader'>Bank your time</h2>
                    <div className='pause__subcontainer--paragraph--container'>
                        <p className='pause__subcontainer--paragraph'>Many of our clients have website work that they need to be completed, but they don't have an entire month's worth of work that needs to be done.</p>
                        <p className='pause__subcontainer--paragraph'>That's where our pause feature comes in! Why pay for time that you're not going to use?</p>
                    </div>
                    <ul className='pause__subcontainer--ul'>
                        <li className='pause__subcontainer--li'>✓ There are 31 days in a plan. If you only used 15 days, you can pause and bank your remaining 16 days.</li>
                        <li className='pause__subcontainer--li'>✓ Save your money, and still get the service you need.</li>
                        <li className='pause__subcontainer--li'>✓ Pause and unpause your plan quickly and easily.</li>
                    </ul>
                    <div className='pause__subcontainer--button__container'>
                        <a href='/contact/sales'>
                            <button className='pause__subcontainer--button button__primary'>Contact Us</button>
                        </a>
                        <a href='/pricing'>
                            <button className='pause__subcontainer--button button__tertiary'>Pricing</button>
                        </a>
                    </div>
                </div>
                <div className='pause__subcontainer--right'>
                    <PauseIcon />
                </div>
            </div>
        </div>
    )
}