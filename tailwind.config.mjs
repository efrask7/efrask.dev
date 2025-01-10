/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom': '#f33ba4',
				'custom2': '#f5c39c',
				'title': '#dd7738',
				'btns': '#f5c39c'
			}
		},
	},
	plugins: [],
}
