/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				content: {
					0: "hsl(var(--color-content0) / <alpha-value>)",
					1: "hsl(var(--color-content1) / <alpha-value>)",
				},
				accent: {
					1: "hsl(var(--color-accent1) / <alpha-value>)",
					2: "hsl(var(--color-accent2) / <alpha-value>)",
					3: "hsl(var(--color-accent3) / <alpha-value>)",
					4: "hsl(var(--color-accent4) / <alpha-value>)",
					5: "hsl(var(--color-accent5) / <alpha-value>)",
				},
				bg: "hsl(var(--color-bg) / <alpha-value>)",
				highlight: "hsl(var(--color-highlight) / <alpha-value>)",
				
			}
		},
	},
	plugins: [],
}
