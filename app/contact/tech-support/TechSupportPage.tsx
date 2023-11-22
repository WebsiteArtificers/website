import './techSupport.css'
import TechSupportLeft from './techSupportComponents/TechSupportLeft'
import TechSupportRight from './techSupportComponents/TechSupportRight'
import { Suspense } from 'react'
import { LoadingScreen } from '@/components/components'

export default function TechSupportPage() {
    return (
        <div className="techSupport__container">
            <div className="techSupport__title--subcontainer">
                <div className='techSupport__route--container'>
                    <a className='techSupport__route--link' href='/contact'>Contact</a>
                    <p className='techSupport__route--slash'>/</p>
                    <p className='techSupport__route--page'>Technical Support</p>
                </div>
                <div className='techSupport__header--container'>
                    <h1 className='techSupport__header'>Talk to our tech nerds</h1>
                </div>
            </div>
            <p className='techSupport__paragraph'>We understand that technology can be both confusing and frustrating. We understand that our systems may seem complex and confusing at times. We're here to help. We'll be in touch shortly to get you the support you need.</p>
            <div className="techSupport__components--subcontainer">
                <TechSupportLeft />
                <Suspense fallback={<LoadingScreen />}>
                    <TechSupportRight />
                </Suspense>
            </div>
        </div>
    )
}