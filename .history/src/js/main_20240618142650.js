import '../css/style.css'
import { themeToggleHandler } from './utils'

themeToggleHandler()

const startGameBtn = document.getElementById('startGame')

let count = 0
startGameBtn.addEventListener('click', () => {
	startGameBtn.innerText = `Start game ${count++}`
})

