/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			primary: ['Inter Tight', 'sans-serif'],
			headliner: ['Abril Fatface', 'cursive']
		},
		extend: {
			colors: {
				'theme-darkRed': '#4F000B',
				'theme-fire': '#720026',
				'theme-salmon': '#CE4257',
				'theme-coral': '#FF7F51',
				'theme-sand': '#FF9B54'
			},
		}
	},
	plugins: [],
}
