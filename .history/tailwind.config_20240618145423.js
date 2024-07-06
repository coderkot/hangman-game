/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
    content: ['./index.html', './src/**/*.js'],
    theme: {
        fontFamily: {
            'sans': ['"Akzidenz"', ...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
}

