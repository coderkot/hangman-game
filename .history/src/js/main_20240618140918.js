import '../css/style.css'

const html = document.documentElement
const themeToggle = document.getElementById('themeToggle')

html.classList.add(localStorage.getItem('theme'))

themeToggle.addEventListener('input', () => {
	localStorage.setItem('theme', html.classList.contains('dark') ? )

	html.classList.toggle('dark')
})