import '../css/style.css'

const themeToggle = document.getElementById('themeToggle')
themeToggle.addEventListener('input', () => {
	const html = document.documentElement

	html.classList.toggle('dark')
})