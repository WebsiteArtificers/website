import './menus.css'

export default function Solutions() {
    return (
        <div className='menu__container'>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Use Cases</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Development</h2>
                    <p className='menu__subcontainer--description'>The best web and software development</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Marketing</h2>
                    <p className='menu__subcontainer--description'>Drive traffic with SEO and marketing</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Design</h2>
                    <p className='menu__subcontainer--description'>Beautiful and bespoke designs</p>
                </a>
            </div>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Integration</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Code</h2>
                    <p className='menu__subcontainer--description'>All of our integrations used for programming</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Design</h2>
                    <p className='menu__subcontainer--description'>All of our tools used for design</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Much More</h2>
                    <p className='menu__subcontainer--description'>See what goes into crafting an incredible online experience</p>
                </a>
            </div>
        </div>
    )
}