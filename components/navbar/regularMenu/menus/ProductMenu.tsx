import './menus.css'

export default function Product() {
    return (
        <div className='menu__container'>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Platform</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Frontend</h2>
                    <p className='menu__subcontainer--description'>Your virtual storefront</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Data</h2>
                    <p className='menu__subcontainer--description'>Supercharge your business</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Backend</h2>
                    <p className='menu__subcontainer--description'>Securely manage your business</p>
                </a>
            </div>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Features</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Increase Brand Presence</h2>
                    <p className='menu__subcontainer--description'>Drive customers to your site</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Capitalize on Opportunity</h2>
                    <p className='menu__subcontainer--description'>Find areas for growth</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Manage Your Brand</h2>
                    <p className='menu__subcontainer--description'>Visualize data and manage your brand</p>
                </a>
            </div>
        </div>
    )
}