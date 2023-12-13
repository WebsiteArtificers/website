import BackendPage from './BackendPage'

const meta = {
  title: 'The Website Artificers: Your Virtual Headquarters',
  description: 'The backend of your website is what gives your website functionality and superpowers. So many companies solely rely on their website to provide a frontend. Here at the Website Artificers, we take it one step further and allow you to visualize all your data and KPIs from your secure backend. Supercharge your website with us.',
  cardImage: '/images/website-artificer-logo.ico',
  robots: 'follow, index',
  favicon: '/images/website-artificer-logo.ico',
  url: process.env.NEXT_PUBLIC_SITE_URL + '/platform/backend',
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
    return (<BackendPage />)
}
