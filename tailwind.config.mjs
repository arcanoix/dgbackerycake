/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Colores oficiales del logo DGBACKERY&CAKE
				primary: {
					50: '#fff5f0',
					100: '#ffe8db',
					200: '#ffd4b8',
					300: '#ffcc99', // Color durazno/crema del logo
					400: '#ffb366',
					500: '#ff9933',
					600: '#ff8000',
					700: '#cc6600',
					800: '#994d00',
					900: '#663300',
					DEFAULT: '#ffcc99',
				},
				secondary: {
					50: '#fff0f0',
					100: '#ffe0e0',
					200: '#ffc2c2',
					300: '#ffa3a3',
					400: '#ff8585',
					500: '#ff6666', // Rosa coral del logo
					600: '#ff3333',
					700: '#cc0000',
					800: '#990000',
					900: '#660000',
					DEFAULT: '#ff6666',
				},
				accent: {
					50: '#f5f5f5',
					100: '#e6e6e6',
					200: '#cccccc',
					300: '#b3b3b3',
					400: '#999999',
					500: '#808080',
					600: '#666666',
					700: '#4d4d4d',
					800: '#333333',
					900: '#1a1a1a',
					DEFAULT: '#000000', // Negro del logo
				},
			},
			fontFamily: {
				display: ['Playfair Display', 'serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'float': 'float 3s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
			},
		},
	},
	plugins: [],
}
