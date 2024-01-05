/** @type {import('tailwindcss').Config} */
module.exports = 
{
	content: 
	[
		"./src/**/*.{html,ts}",
	],
	theme: 
	{
		extend: {},
		screens: 
		{
			'sm': '640px',
			'md': '1024px',
			'lg': '1440px',
			'xl': '1920px',
			'2xl': '2560px',
			'3xl': '3840px'
		},
	},
	plugins: [],
  }