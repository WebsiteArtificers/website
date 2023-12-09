import './platform.css';

export default function PlatformPage() {
    return (
        <div className='platform__container'>
            <h1 className='platform__header'>Our Platform</h1>
            <div className='platform__subcontainer'>
                <div className='platform__subcontainer--subcontainer'>
                    Frontend
                </div>
                <div className='platform__subcontainer--subcontainer'>
                    Data
                </div>
                <div className='platform__subcontainer--subcontainer'>
                    Backend
                </div>
            </div>
        </div>
    )
}
