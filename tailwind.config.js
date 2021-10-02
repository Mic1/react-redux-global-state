module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./features/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		underlineThickness: {
			thin: "2px",
			thick: "3px",
		},
		underlineOffset: {
			small: "2px",
			medium: "4px",
		},
		extend: {
			transitionProperty: {
				width: "width",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-underline-utils")],
};
