import './thankYou.css';
import { Suspense } from 'react'
import { LoadingScreen } from '@/components/components'

const meta = {
    title: 'The Website Artificers: Thank you for contacting us!',
    description: "Thank you for taking the time to contact us! We will do our best to get back to you in a timely manner!",
    cardImage: '/images/website-artificer-logo.ico',
    robots: 'follow, index',
    favicon: '/images/website-artificer-logo.ico',
    url: process.env.NEXT_PUBLIC_SITE_URL + '/thank-you',
    type: 'website'
};
  
export const metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    robots: meta.robots,
    favicon: meta.favicon,
    url: meta.url,
    type: meta.type,
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      cardImage: meta.cardImage,
      type: meta.type,
      site_name: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@websiteartificers',
      title: meta.title,
      description: meta.description,
      cardImage: meta.cardImage
    }
};

export default function ThankYouPage() {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <div className='thankYou__container'>
                <h1 className='thankYou__header'>Thank you for reaching out</h1>
                <p className='thankYou__paragraph thankYou__top'>We have received your submission and will be in touch soon.</p>
                <p className='thankYou__paragraph thankYou__bottom'>You can also reach us by emailing contact@websiteartificers.com or learn more about us by checking us out on <a className='thankYou__link' href='https://www.youtube.com/@SamTeigland' target="_blank" rel="noopener noreferrer">YouTube</a>.</p>
                <div className='thankYou__button--container'>
                    <a href='/contact'>
                        <button className='thankYou__button button__primary'>Contact us</button>
                    </a>
                    <a href='/'>
                        <button className='thankYou__button button__tertiary'>Return Home</button>
                    </a>
                </div>
            </div>
        </Suspense>
    )
}
