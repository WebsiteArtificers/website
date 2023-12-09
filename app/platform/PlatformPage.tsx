import './platform.css';
import { Backend, Website, Data } from '@/icons/icons';

export default function PlatformPage() {
    return (
        <div className='platform__container'>
            <h1 className='platform__header'>Our Platform</h1>
            <div className='platform__subcontainer'>
                <a href='/platform/frontend' className='platform__subcontainer--subcontainer'>
                    <div className='platform__icon--container'>
                        <Website />
                    </div>
                    <h2 className='platform__subcontainer--header'>Frontend</h2>
                    <p className='platform__subcontainer--paragraph'>
                        The part of your website that your customers interact with!
                        The frontend of your website is the virtual extension of your business.
                        We make your frontend bespoke, beautiful, and fully optimized for SEO,
                        so that your business can shine.
                    </p>
                    <h3 className='platform__subcontainer--subheader'>More about frontend development</h3>
                </a>
                <a href='/platform/data' className='platform__subcontainer--subcontainer'>
                    <div className='platform__icon--container'>
                        <Data />
                    </div>
                    <h2 className='platform__subcontainer--header'>Data</h2>
                    <p className='platform__subcontainer--paragraph'>
                        Data is the new oil.
                        We help you collect, store, and analyze your data so that you can make informed decisions about your business.
                        We also help you visualize your data in a way that is easy to understand and digest.
                    </p>
                    <h3 className='platform__subcontainer--subheader'>More about data analytics</h3>
                </a>
                <a href='/platform/backend' className='platform__subcontainer--subcontainer'>
                    <div className='platform__icon--container'>
                        <Backend />
                    </div>
                    <h2 className='platform__subcontainer--header'>Backend</h2>
                    <p className='platform__subcontainer--paragraph'>
                        The backend of your website is the engine that powers your website.
                        We make sure that your backend is secure, scalable, and efficient.
                        Think of it as your online headquarters.
                        Your customers don't see it, but it's the backbone of your business.
                    </p>
                    <h3 className='platform__subcontainer--subheader'>More about backend development</h3>
                </a>
           </div>
        </div>
    )
} 
