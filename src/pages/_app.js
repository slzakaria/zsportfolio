import '@/styles/globals.css';
import Head from 'next/head';
import { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { Layout } from '@/components/Layout';
import { ToTop } from '@/components/ui/ToTop';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';

export default function App({ Component, pageProps }) {
	const { pathname } = useRouter();
	const [path, setPath] = useState(pathname);
	const [theme, setTheme] = useState('light');

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000910' />
				<meta name='og:image' content='/zs.png' />
				<meta name='og:title' content='Zakaria Slimane Software Developer DevOps & cloud' />
				<meta name='twitter:title' content='Zakaria SLIMANE - Software Developer' />
				<meta name='og:description' content='Zakaria Slimane Software Developer DevOps & cloud' />
				<meta name='description' content='Zakaria Slimane Software Developer DevOps & cloud' />
				<meta
					name='twitter:description'
					content='Zakaria Slimane Software Developer DevOps & cloud'
				/>
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/manifest.json' />
				<meta name='robots' content='index, follow' />
				<meta
					name='description'
					content='Software developer specializing in JavaScript ES6, React, and Golang Based in Morocco. Crafting seamless, interactive web experiences, wordpress sites and shopify ecommerce sites. Excited about DevOps, Cloud Engineering, CI/CD automation, and AWS technologies.'
				/>
				<title>Zakaria Slimane | Software Developer DevOps & Cloud | Morocco (Maroc)</title>
			</Head>

			<Layout theme={theme} path={path} setPath={setPath}>
				<ToTop />
				<ThemeSwitcher theme={theme} setTheme={setTheme} />
				<SpeedInsights />
				<Analytics />
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
