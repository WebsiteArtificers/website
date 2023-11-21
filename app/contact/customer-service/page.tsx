import CustomerServicePage from './CustomerServicePage';

const meta = {
    title: 'The Website Artificers: Contact Customer Service',
    description: "Connect with Website Artificers in Nashville for expert web development and online solutions. Having an issue with your account, payment, or any other more generalized issue? Contact us here and get the help you need.",
    cardImage: '/images/website-artificer-logo.ico',
    robots: 'follow, index',
    favicon: '/images/website-artificer-logo.ico',
    url: process.env.NEXT_PUBLIC_SITE_URL + '/contact/customer-service',
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

export default function Page() { return <CustomerServicePage /> }