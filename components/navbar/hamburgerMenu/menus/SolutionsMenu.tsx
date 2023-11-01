import './menus.css'

export default function Solutions() {
    return (
        <div className='hamburgerMenu__container'>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Use Cases</h1>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>E-Commerce</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Sell your products online</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Marketing</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Drive traffic with SEO and marketing</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Products and Services</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Perfect for any business</p>
                </a>
            </div>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Integration</h1>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Sanity</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Your very own CMS</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Next.js</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Amazing fullstack websites</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Much More</h2>
                    <p className='hamburgerMenu__subcontainer--description'>See what goes into crafting your website</p>
                </a>
            </div>
        </div>
    )
}