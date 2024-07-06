/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
    content: ['./index.html', './src/**/*.js'],
    theme: {
        fontFamily: {
            sans: ['"Akzidenz"', 'system-ui', 'sans-serif'],
			serif: ['"Akzidenz"', 'system-ui', 'sans-serif'],
			html: ['"Akzidenz"', 'system-ui', 'sans-serif'],
			display: ['"Akzidenz"', 'system-ui', 'sans-serif'],
			body: ['"Akzidenz"', 'system-ui', 'sans-serif'],
        },
		'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
        extend: {},
    },
    plugins: [],
}

