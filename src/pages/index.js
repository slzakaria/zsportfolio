import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HomeIntro } from '@/components/HomeIntro';
import { Socials } from '@/components/ui/Socials';
import { Projects } from '@/components/data/Projects';
import { Work } from '@/components/data/Work';
import { Stack } from '@/components/data/Stack';
import { Articles } from '@/components/data/Articles';
import siteData from '../data/siteData';
import SEO from '../data/seo';

export default function Home() {
	const currentSEO = SEO.find((item) => item.page === 'home');
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{siteData.main.title}</title>
					<meta name='description' content={currentSEO.description} />
					<link rel='canonical' href='https://zackariasl.dev' />
					<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				</Helmet>

				<HomeIntro datas={siteData.homePage} />
				<Socials />
				<Projects />
				<Articles />
				<Stack />
				<Work />
			</HelmetProvider>
		</>
	);
}
