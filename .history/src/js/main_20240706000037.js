import '../css/style.css'
import { themeToggleHandler, langToggleHandler } from './utils'
import { startGameHandler } from './game'

themeToggleHandler()
langToggleHandler()

const startGameBtn = document.getElementById('startGame')



startGameBtn.addEventListener('click', () => {
	startGameHandler()
})
