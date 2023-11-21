import TechSupportPage from './TechSupportPage';

const meta = {
    title: 'The Website Artificers: Contact Technical Support',
    description: "Connect with Website Artificers in Nashville for expert web development and online solutions. Get in contact with one of our computer nerds on our technical support team to help work through any technical issues you may be having.",
    cardImage: '/images/website-artificer-logo.ico',
    robots: 'follow, index',
    favicon: '/images/website-artificer-logo.ico',
    url: process.env.NEXT_PUBLIC_SITE_URL + '/contact/tech-support',
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

export default function Page() { return <TechSupportPage /> }