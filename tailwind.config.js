/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
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
				jetBrain: ['JetBrains Mono', 'monospace', 'cursive'],
				cousine: ['Cousine', 'sans-serif'],
			},
			colors: {
				lightblue: '#6EACDA',
				eggshell: '#EEEEEE',
				cream: '#E2E2B6',
				limes: '#BED754',
				darkgreen: '#059669',
			},
		},
	},
	plugins: [typography],
};
