/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// L'Artisan Crème Design System Colors
				surface: {
					DEFAULT: '#fff8ef',
					bright: '#fff8ef',
					container: '#f5edde',
					'container-low': '#fbf3e4',
					'container-high': '#efe7d9',
					'container-highest': '#e9e2d3',
					'container-lowest': '#ffffff',
					dim: '#e1d9cb',
				},
				primary: {
					DEFAULT: '#ff6666',
					container: '#ffc8c5',
				},
				secondary: {
					DEFAULT: '#ffcc99',
					container: '#ffe8db',
				},
				tertiary: {
					DEFAULT: '#d9774a',
					container: '#ffdfcc',
				},
				outline: {
					DEFAULT: '#a18f7e',
					variant: '#e8ddd4',
				},
				'on-surface': {
					DEFAULT: '#1e1b13',
					variant: '#6b5d4f',
				},
				// Brand colors (keeping original palette)
				brand: {
					peach: '#ffcc99',
					coral: '#ff6666',
					cream: '#fff8ef',
				},
			},
			fontFamily: {
				serif: ['Noto Serif', 'Georgia', 'serif'],
				sans: ['Manrope', 'system-ui', 'sans-serif'],
				// Legacy support
				display: ['Noto Serif', 'Georgia', 'serif'],
				body: ['Manrope', 'system-ui', 'sans-serif'],
			},
			spacing: {
				// Editorial spacing scale
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out',
				'slide-up': 'slideUp 0.6s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [
		function({ addComponents }) {
			addComponents({
				'.category-label': {
					fontSize: '0.75rem',
					fontWeight: '600',
					letterSpacing: '0.15em',
					textTransform: 'uppercase',
				},
			});
		},
	],
}
