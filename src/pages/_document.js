import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang='en-US' className='antialiased'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap'
					rel='stylesheet'
				/>
				<Script id='google-tag-manager' strategy='afterInteractive'>
					{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-5VN9RWGN');
					`}
				</Script>
				{(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview') && (
					// eslint-disable-next-line @next/next/no-sync-scripts
					<script
						data-project-id='BbjXP2sUYz2uXbn0bOPztFIHzhezx26Y9S4bx82x'
						data-is-production-environment='false'
						src='https://snippet.meticulous.ai/v1/meticulous.js'
					/>
				)}
			</Head>
			<body className='light'>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VN9RWGN"
						height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}></noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
