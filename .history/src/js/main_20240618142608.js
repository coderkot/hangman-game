import '../css/style.css'

const html = document.documentElement
const themeToggle = document.getElementById('themeToggle')
const startGameBtn = document.getElementById('startGame')



let count = 0
startGameBtn.addEventListener('click', () => {
	startGameBtn.innerText = `Start game ${count++}`
})

