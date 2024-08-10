import { Helmet, HelmetProvider } from 'react-helmet-async';
import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
import { ArticlesList } from '@/components/data/ArticlesList';
import SEO from '@/data/seo';
import siteData from '@/data/siteData';

export default function Articles() {
	const currentSEO = SEO.find((item) => item.page === 'articles');
	const TEXTS = ['JavaScript,', 'React,', 'Golang,', 'CICD,', 'AWS,'];
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
						Unveiling the World of Web Development{' '}
						<TextTransition direction='down' inline='true' springConfig={presets.gentle}>
							<span className='text-limes'>{TEXTS[index % TEXTS.length]}</span>
						</TextTransition>{' '}
						devOps and Cloud Engineering
					</h1>
					<br></br>
					<h2>{siteData.articlesPage.description}</h2>
				</div>

				<ArticlesList />
			</section>
		</HelmetProvider>
	);
}
