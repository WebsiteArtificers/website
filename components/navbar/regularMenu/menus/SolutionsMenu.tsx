import './menus.css'

export default function Solutions() {
    return (
        <div className='menu__container'>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Use Cases</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>E-Commerce</h2>
                    <p className='menu__subcontainer--description'>Sell your products online</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Marketing</h2>
                    <p className='menu__subcontainer--description'>Drive traffic with SEO and marketing</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Products and Services</h2>
                    <p className='menu__subcontainer--description'>Perfect for any business</p>
                </a>
            </div>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Integration</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Sanity</h2>
                    <p className='menu__subcontainer--description'>Your very own CMS</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Next.js</h2>
                    <p className='menu__subcontainer--description'>Amazing fullstack websites</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Much More</h2>
                    <p className='menu__subcontainer--description'>See what goes into crafting your website</p>
                </a>
            </div>
        </div>
    )
}