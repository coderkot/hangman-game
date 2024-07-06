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

export const startGameHandler = () => {
	const startGameBtn = document.getElementById('startGame')

	let count = 0
	startGameBtn.addEventListener('click', () => {
		startGameBtn.innerText = `Start game ${count++}`
	})
}