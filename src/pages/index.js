import { Helmet, HelmetProvider } from 'react-helmet-async';
import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
import { Socials } from '@/components/ui/Socials';
import { ProjectsList } from '@/components/data/ProjectsList';
import { Work } from '@/components/data/Work';
import { Stack } from '@/components/data/Stack';
import { ArticlesList } from '@/components/data/ArticlesList';
import siteData from '../data/siteData';
import SEO from '../data/seo';

export default function Home() {
	const currentSEO = SEO.find((item) => item.page === 'home');
	const TEXTS = ['javaScript app', 'Golang app', 'AWS & cloud app', 'wordpress site'];
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
		return () => clearTimeout(intervalId);
	}, []);
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{siteData.main.title}</title>
					<meta name='description' content={currentSEO.description} />
					<link rel='canonical' href='https://zackariasl.dev' />
					<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				</Helmet>

				<div className='container text-eggshell font-cousine mt-14'>
					<h1 className='text-lg sm:text-2xl'>
						I dabble in devOps practices, and build{' '}
						<span className='text-limes font-jetBrain'>
							<TextTransition direction='down' inline='true' springConfig={presets.gentle}>
								{TEXTS[index % TEXTS.length]}
							</TextTransition>
							s.
						</span>
					</h1>
					<br></br>
					<h1 className='sm:text-2xl text-xl font-jetBrain mb-5'>About me </h1>
					<h2 className='mb-2 text-slate-300'>{siteData.homePage.description}</h2>
					<h2 className='text-slate-300'>{siteData.homePage.cta}</h2>
				</div>
				<Socials />
				<ProjectsList />
				<ArticlesList />
				<Stack />
				<Work />
			</HelmetProvider>
		</>
	);
}
