import SalesPage from './SalesPage';

const meta = {
    title: 'The Website Artificers: Contact Sales',
    description: "Connect with Website Artificers in Nashville for expert web development solutions. Reach out on our sales contact page to transform your online presence with our skilled team.",
    cardImage: '/images/website-artificer-logo.ico',
    robots: 'follow, index',
    favicon: '/images/website-artificer-logo.ico',
    url: process.env.NEXT_PUBLIC_SITE_URL + '/sales',
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

export default function Page() { return <SalesPage /> }