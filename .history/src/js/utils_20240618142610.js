export const themeToggleHandler = () => {
	if (localStorage.getItem('theme') === 'dark') {
		html.classList.add('dark')
		themeToggle.checked = true
	}
	
	themeToggle.addEventListener('input', () => {
		html.classList.toggle('dark')
	
		localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light')
	})
}