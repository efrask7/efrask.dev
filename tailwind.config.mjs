/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				'custom': '#f33ba4',
				'custom2': '#f5c39c',
				'custom2-1': '#e66429',
				'title': '#dd7738',
				'btns': '#f5c39c',
				'custom_icon': '#f8d659',
				'custom2_icon': '#2a73b8',
				'custom2-1_icon': '#2b74b9',
				'title_icon': '#2c76ba',
				'btns_icon': '#2d76ba'
			},
			keyframes: {
				'bounce-horizontal': {
					'0%, 100%': {
						transform: 'translateX(40%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateX(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					}
				}
			},
			animation: {
				'bounce-horizontal': 'bounce-horizontal 1.5s infinite alternate',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
