import './offering.css'
import { Website, Data, Backend } from '../../icons/icons'

export default function Offering() {
    return (
        <div className='offering__container'>
            <div className='offering__svg--container'>
                <div className='offering__svg--subcontainer'>
                    <Website />
                </div>
                <div className='offering__svg--subcontainer'>
                    <Data />
                </div>
                <div className='offering__svg--subcontainer'>
                    <Backend />
                </div>
            </div>
            <div className='offering__subcontainer website'>
                <a href='/website'>
                    <button className='offering__button website__button'>Website</button>
                </a>
                <p className='offering__paragraph website__paragraph'>
                    A unique and custom website that enhances your
                    business, powers your brand, and supports the growth of your company.
                </p>
            </div>
            <div className='offering__subcontainer data'>
                <a href='/data'>
                    <button className='offering__button data__button'>Data</button>
                </a>
                <p className='offering__paragraph data__paragraph'>
                    We supercharge your website with modern data collection, storage, organization, and visualization,
                    helping you to better understand your business and your customers.
                </p>
            </div>
            <div className='offering__subcontainer backend'>
                <a href='/backend'>
                    <button className='offering__button backend__button'>Backend</button>
                </a>
                <p className='offering__paragraph backend__paragraph'>
                    Visualize and act on your business data through your backend dashboard.
                    We take the data from your frontend and securely send it to the backend.
                </p>
            </div>
        </div>
    )
}