/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
    content: ['./index.html', './src/**/*.js'],
    theme: {
        fontFamily: {
            sans: ['"Akzidenz"', system-ui, sans-serif],
			serif: ['"Akzidenz"'],
			html: ['"Akzidenz"'],
			display: ['"Akzidenz"'],
			body: ['"Akzidenz"'],
        },
        extend: {},
    },
    plugins: [],
}

