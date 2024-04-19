import './menus.css'

export default function Product() {
    return (
        <div className='hamburgerMenu__container'>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Platform</h1>
                <a className='hamburgerMenu__subcontainer--link' href='/platform/frontend'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Frontend</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Your virtual storefront</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link' href='/platform/data'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Data</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Supercharge your business</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link' href='/platform/backend'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Backend</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Securely manage your business</p>
                </a>
            </div>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Features</h1>
                <a className='hamburgerMenu__subcontainer--link' href='/pause'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Pause Feature</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Don't need a whole month? Pause your plan!</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link' href='/rewards'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>About Our Affiliates</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Make money as an affiliate!</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link' href='/account'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Manage Your Account</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Manage your account here!</p>
                </a>
            </div>
        </div>
    )
}
