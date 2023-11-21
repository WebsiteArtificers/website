import './customerService.css'
import { Suspense } from 'react'
import { LoadingScreen } from '@/components/components'
import CustomerServiceLeft from './customerServiceComponents/CustomerServiceLeft'
import CustomerServiceRight from './customerServiceComponents/CustomerServiceRight'

export default function CustomerServicePage() {
    return <div className="customerService__container">
    <div className="customerService__title--subcontainer">
        <div className='customerService__route--container'>
            <a className='customerService__route--link' href='/contact'>Contact</a>
            <p className='customerService__route--slash'>/</p>
            <p className='customerService__route--page'>Customer Service</p>
        </div>
        <div className='customerService__header--container'>
            <h1 className='customerService__header'>Talk to our customer service team</h1>
        </div>
    </div>
    <p className='customerService__paragraph'>Are you an existing customer and have questions about billing, quotas, plans, or user management? Fill out the form, and we’ll be in touch as soon as possible.</p>
    <div className="customerService__components--subcontainer">
        <CustomerServiceLeft />
        <Suspense fallback={<LoadingScreen />}>
            <CustomerServiceRight />
        </Suspense>
    </div>
</div>
}