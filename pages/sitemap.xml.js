// pages/sitemap.xml.js

const WEBSITE_URL = process.env.NEXT_PUBLIC_SITE_URL

function generateSiteMap() {
  const urls = [
    WEBSITE_URL,
    WEBSITE_URL + '/blog',
    // Add more static URLs here
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;
}

function SiteMap() {
  // Empty component, as we're just using getServerSideProps
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;