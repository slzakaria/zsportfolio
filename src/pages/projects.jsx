import { Helmet, HelmetProvider } from 'react-helmet-async';
import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
import { ProjectsList } from '@/components/data/ProjectsList';
import SEO from '@/data/seo';
import siteData from '@/data/siteData';

export default function Projects() {
	const currentSEO = SEO.find((item) => item.page === 'projects');
	const TEXTS = ['Line', 'Solution', 'project'];
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>{`Contact | ${siteData.main.title}`}</title>
				<meta name='description' content={currentSEO.description} />
				<meta name='keywords' content={currentSEO.keywords.join(', ')} />
			</Helmet>

			<section className='mt-14 text-eggshell font-cousine'>
				<div className='mb-5'>
					<h1 className='text-lg sm:text-2xl'>
						Problem solving, one{' '}
						<TextTransition direction='down' inline='true' springConfig={presets.gentle}>
							<span className='text-limes'>{TEXTS[index % TEXTS.length]}</span>
						</TextTransition>{' '}
						at a time.
					</h1>
					<br></br>
					<h2>{siteData.projectsPage.cta}</h2>
				</div>

				<ProjectsList />
			</section>
		</HelmetProvider>
	);
}
