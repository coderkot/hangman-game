export const themeToggleHandler = () => {
	const html = document.documentElement
	const themeToggle = document.getElementById('themeToggle')

	if (localStorage.getItem('theme') === 'dark') {
		html.classList.add('dark')
		themeToggle.checked = true
	}

	themeToggle.addEventListener('input', () => {
		html.classList.toggle('dark')

		localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light')
	})
}

export const langToggleHandler = () => {
	const html = document.documentElement
	const langToggle = document.getElementById('langToggle')

	if (localStorage.getItem('lang') === 'RU') {
		langToggle.checked = true
	}

	themeToggle.addEventListener('input', () => {
		localStorage.setItem('lang', html.classList.contains('dark') ? 'dark' : 'light')
	})
}