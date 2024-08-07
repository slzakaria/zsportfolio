import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang='en-US' className='antialiased'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
					rel='stylesheet'></link>

				<Script id='google-tag-manager' strategy='afterInteractive'>
					{`(function (w, d, s, l, i) {
						w[l] = w[l] || []; w[l].push({'gtm.start':
						new Date().getTime(), event: 'gtm.js'}); var f = d.getElementsByTagName(s)[0],
						j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
						'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
						})(window, document, 'script', 'dataLayer', 'GTM-TX45GD23');
        `}
				</Script>
			</Head>
			<body>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TX45GD23"
				height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}></noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
