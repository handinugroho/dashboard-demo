/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	darkMode: ["class"],
// 	content: ["./src/**/*.{html,js,svelte,ts}"],
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: "2rem",
// 			screens: {
// 				"2xl": "1400px"
// 			}
// 		},
// 		extend: {
// 			colors: {
// 				border: "hsl(var(--border))",
// 				input: "hsl(var(--input))",
// 				ring: "hsl(var(--ring))",
// 				background: "hsl(var(--background))",
// 				foreground: "hsl(var(--foreground))",
// 				primary: {
// 					DEFAULT: "hsl(var(--primary))",
// 					foreground: "hsl(var(--primary-foreground))"
// 				},
// 				secondary: {
// 					DEFAULT: "hsl(var(--secondary))",
// 					foreground: "hsl(var(--secondary-foreground))"
// 				},
// 				destructive: {
// 					DEFAULT: "hsl(var(--destructive))",
// 					foreground: "hsl(var(--destructive-foreground))"
// 				},
// 				muted: {
// 					DEFAULT: "hsl(var(--muted))",
// 					foreground: "hsl(var(--muted-foreground))"
// 				},
// 				accent: {
// 					DEFAULT: "hsl(var(--accent))",
// 					foreground: "hsl(var(--accent-foreground))"
// 				},
// 				popover: {
// 					DEFAULT: "hsl(var(--popover))",
// 					foreground: "hsl(var(--popover-foreground))"
// 				},
// 				card: {
// 					DEFAULT: "hsl(var(--card))",
// 					foreground: "hsl(var(--card-foreground))"
// 				}
// 			},
// 			borderRadius: {
// 				lg: "var(--radius)",
// 				md: "calc(var(--radius) - 2px)",
// 				sm: "calc(var(--radius) - 4px)"
// 			},
// 			fontFamily: {
// 				sans: [...fontFamily.sans]
// 			}
// 		}
// 	},
// 	plugins: [require("tailwindcss-animate")]
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		},
	},
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
}