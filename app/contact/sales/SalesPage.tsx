import './sales.css'
import SalesLeft from './salesComponents/SalesLeft'
import SalesRight from './salesComponents/SalesRight'
import { Suspense } from 'react'
import { LoadingScreen } from '@/components/components'

export default function SalesPage() {
    return (
        <div className="sales__container">
            <div className="sales__title--subcontainer">
                <div className='sales__route--container'>
                    <a className='sales__route--link' href='/contact'>Contact</a>
                    <p className='sales__route--slash'>/</p>
                    <p className='sales__route--page'>Sales</p>
                </div>
                <div className='sales__header--container'>
                    <h1 className='sales__header'>Talk to our sales team</h1>
                </div>
            </div>
            <p className='sales__paragraph'>Find out how the Website Artificers can help your company through our productized service plans. We'll be in touch shortly to answer your questions!</p>
            <div className="sales__components--subcontainer">
                <SalesLeft />
                <Suspense fallback={<LoadingScreen />}>
                    <SalesRight />
                </Suspense>
            </div>
        </div>
    )
}