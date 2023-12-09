import PlatformPage from './PlatformPage';

const meta = {
  title: 'The Website Artificers: Our Bespoke Website Platform, Tailored and Developed Just for You',
  description: "Our bespoke and custom website platform is divided into three distinct parts. The frontend is the product that your users see and interact with. That data is then sent to the backend where your data is housed. Supercharge your business with the Website Artificer platform!",
  cardImage: '/images/website-artificer-logo.ico',
  robots: 'follow, index',
  favicon: '/images/website-artificer-logo.ico',
  url: process.env.NEXT_PUBLIC_SITE_URL + '/platform',
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
        <PlatformPage />
    ) 
}
