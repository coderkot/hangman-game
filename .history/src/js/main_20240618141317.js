import '../css/style.css'

const html = document.documentElement
const themeToggle = document.getElementById('themeToggle')

if (localStorage.getItem('theme') === 'dark')

themeToggle.addEventListener('input', () => {
	html.classList.toggle('dark')

	localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : '')
})