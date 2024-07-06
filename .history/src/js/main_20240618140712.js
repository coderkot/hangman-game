import '../css/style.css'

const html = document.documentElement
const themeToggle = document.getElementById('themeToggle')
themeToggle.addEventListener('input', () => {
	

	html.classList.toggle('dark')
})