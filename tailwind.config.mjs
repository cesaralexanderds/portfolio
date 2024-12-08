/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  primary: '#17292b', 
			  secondary: '#385756', 
			  back: '#0b1719',
			  hoverText: '#355f57',
			},
		  },	  
	},
	plugins: [],
}
