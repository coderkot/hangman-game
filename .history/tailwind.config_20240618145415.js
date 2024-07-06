/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
    content: ['./index.html', './src/**/*.js'],
    theme: {
        fontFamily: {
            'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
}

