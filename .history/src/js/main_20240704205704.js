import '../css/style.css'
import { themeToggleHandler } from './utils'
import { startGameHandler } from './game'

themeToggleHandler()

const startGameBtn = document.getElementById('startGame')

startGameBtn.addEventListener('click', () => {
	startGameBtn.innerText = `Start game ${count++}`
})
