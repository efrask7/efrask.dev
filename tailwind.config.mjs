/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				'bg-dark': '#0B1220',
				'bg-light': '#F3F4F6',
				'primary': '#2563EB',
				'primary-light': '#93C5FD',
				'text-main': '#111827',
				'text-muted': '#64748B',
				'border-soft': '#E5E7EB',
				'gray-medium': '#94A3B8',
				'success': '#10B981',
				'purple': '#8B5CF6',
				'warning': '#F59E0B',
				'error': '#EF4444',
				'custom': '#2563EB',
				'custom2': '#93C5FD',
				'custom2-1': '#2563EB',
				'title': '#93C5FD',
				'btns': '#93C5FD',
				'custom_icon': '#2563EB',
				'custom2_icon': '#93C5FD',
				'custom2-1_icon': '#F3F4F6',
				'title_icon': '#2563EB',
				'btns_icon': '#2563EB'
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
