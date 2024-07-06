import '../css/style.css'

const html = document.documentElement
const themeToggle = document.getElementById('themeToggle')

localStorage.getItem

themeToggle.addEventListener('input', () => {
	

	html.classList.toggle('dark')
})