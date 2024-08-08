/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import { transform } from 'next/dist/build/swc';
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				flash: 'pulse 2s linear infinite',
			},
			fontFamily: {
				space: ['Space Mono', 'monospace', 'cursive'],
				jetBrain: ['JetBrains Mono', 'monospace', 'cursive'],
				heebo: ['Heebo', 'sans-serif'],
			},
			colors: {
				lightblue: '#06bee1',
			},
		},
	},
	plugins: [typography],
};
