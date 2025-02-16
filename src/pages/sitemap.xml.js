import siteData from '@/data/siteData';

function generateSiteMap() {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://zakariaslimane.xyz</loc>
     </url>
     <url>
       <loc>https://zakariaslimane.xyz/blog</loc>
     </url>
     <url>
       <loc>https://zakariaslimane.xyz/projects</loc>
     </url>
     <url>
       <loc>https://zakariaslimane.xyz/articles</loc>
     </url>
     <url>
       <loc>https://zakariaslimane.xyz/contact</loc>
     </url>
     ${siteData.blogPosts
				.map(({ slug }) => {
					return `
       <url>
           <loc>https://zakariaslimane.xyz/blog/${slug}</loc>
       </url>
     `;
				})
				.join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
	const sitemap = generateSiteMap();

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default function Sitemap() {}
