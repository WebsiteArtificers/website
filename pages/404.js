import './styles/error.css'
import '@/app/globals.css'
import { Navbar, Footer } from '@/components/components'
import Head from 'next/head'

export default function Custom404() {
    return <>
    <Head>
        <title>404 - Sorry, we could not find that page</title>
        <link rel="icon" href="/images/website-artificer-logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content='Your customizable website solution that supercharges your online presence throughout the internet.' />
    </Head>
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
                <button className='error__button button__tertiary'>↩ Go home</button>
            </a>
            <a href='/support' className='error__link'>
                <button className='error__button button__primary'>Contact support</button>
            </a>
        </div>
    </div>
    <Footer />
    </>
  }