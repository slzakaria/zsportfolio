import { Helmet, HelmetProvider } from 'react-helmet-async';
import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
import { ArticlesList } from '@/components/data/ArticlesList';
import SEO from '@/data/seo';
import siteData from '@/data/siteData';

export async function getStaticProps() {
	const res = await fetch('https://api.github.com/repos/Zackaria-Slimane/cvforge');
	const repo = await res.json();
	return { props: { repo } };
}

export default function Articles({ repo }) {
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
				<title>{`Articles | ${siteData.main.offTitle}`}</title>
				<link rel='canonical' href='https://zakariaslimane.xyz/articles/' />
				<meta name='description' content={currentSEO.description} />
				<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				<meta property='og:title' content={`Articles | ${siteData.main.title}`} />
				<meta property='og:description' content={currentSEO.description} />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
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
