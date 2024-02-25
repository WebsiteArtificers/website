import './youTube.css'
import { YouTubeComponent, LoadingScreen } from '@/components/components'
import { Suspense } from 'react'

const meta = {
    title: 'The Website Artificers: Learn to Code with Sam Teigland!',
    description: "Learning to code can be daunting. We walk alongside you to make learning how to code fun and engaging. Sam Teigland is a self-taught developer, so he understands the difficulties self-taught developers face. Sam uses applicable and useful projects that help you learn how to code.",
    cardImage: '/images/website-artificer-logo.ico',
    robots: 'follow, index',
    favicon: '/images/website-artificer-logo.ico',
    url: process.env.NEXT_PUBLIC_SITE_URL + '/youtube',
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


export default function Page() {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <div className='youtube__container'>
                <h1 className='youtube__header'>learn to <span>&lt;code/&gt;</span></h1>
                <h2 className='youtube__subheader'>FASTER</h2>
                <p className='youtube__paragraph'>
                    Sam Teigland teaches an <span>entertaining</span> and <span>no non-sense</span> way of learning how to code.
                </p>
                <p className='youtube__subparagraph'>
                    Sometimes there's so much programming content that it's difficult to sort through what's important and what's not. 
                    We create strong developers without wasting time.
                    We strongly believe that programmers learn to code best by <span>doing</span> and <span>completing</span> projects.
                    Unfortunately, you cannot learn to code by simply watching a bunch of YouTube videos. That's why we give <span>simple</span> and <span>actionable</span> steps to achieve your goals!
                </p>
                <div className='youtube__button--container'>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@SamTeigland'>
                        <button className='youtube__button button__primary'>Visit our YouTube channel</button>
                    </a>
                </div> 
            </div>
            <YouTubeComponent />
        </Suspense>
    )
}
