import '../css/style.css'

const html = document.documentElement
const themeToggle = document.getElementById('themeToggle')

html.classList.add()

themeToggle.addEventListener('input', () => {
	html.classList.toggle('dark')

	localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : '')
})