import PausePage from './PausePage';

const meta = {
    title: 'The Website Artificers: The Pause Feature',
    description: "We have recently extended the pause feature to be available to all clients and users, regardless of the plan that they utilize. Originally, this feature was only available to our top two plans, but now it is available in every plan.",
    cardImage: '/images/website-artificer-logo.ico',
    robots: 'follow, index',
    favicon: '/images/website-artificer-logo.ico',
    url: process.env.NEXT_PUBLIC_SITE_URL + '/pause',
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
        <PausePage />
    )
}