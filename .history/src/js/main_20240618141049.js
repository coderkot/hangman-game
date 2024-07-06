import '../css/style.css'

const html = document.documentElement
const themeToggle = document.getElementById('themeToggle')

html.classList.add(localStorage.getItem('theme'))

themeToggle.addEventListener('input', () => {
	let themeMode = html.classList.contains('dark') ? 'dark' : ''
	localStorage.setItem('theme', )

	html.classList.toggle('dark')
})