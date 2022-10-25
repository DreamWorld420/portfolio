/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				openSans: "'Open Sans', sans-serif",
				robotoSlab: "'Roboto Slab', serif",
				robotoCondensed: "'Roboto Condensed', sans-serif",
			},
		},
	},
	plugins: [],
};
