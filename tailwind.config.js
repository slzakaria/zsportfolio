/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				flash: 'pulse 2s linear infinite',
			},
			fontFamily: {
				jetBrain: ['JetBrainsMono', 'monospace'],
			},
			colors: {
				lightblue: '#6EACDA',
				limes: '#10b981',
				dark: '#000910',
			},
		},
	},
	plugins: [typography],
};
