import './styles/error.css'
import '@/app/globals.css'
import { Navbar, Footer } from '@/components/components'

export default function Custom404() {
    return <>
    <Navbar />
        <div className='error__container'>
        <h1 className='error__error--header'>
            404
        </h1>
        <h1 className='error__header'>
            Sorry, we could not find that page
        </h1>
        <p className='error__paragraph'>
            Our website is getting bigger and bigger everyday and a lot of things get moved around in the process. Please try retyping the address or just head back to our home page.
        </p>
        <div className='error__subcontainer'>
            <a href='/' className='error__link'>
                <button className='error__button button__tertiary'>Go home</button>
            </a>
            <a href='/support' className='error__link'>
                <button className='error__button button__primary'>Contact support</button>
            </a>
        </div>
    </div>
    <Footer />
    </>
  }