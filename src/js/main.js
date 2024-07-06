import '../css/style.css'
import { themeToggleHandler, langToggleHandler } from './utils'
import { startGameHandler } from './game'
import { START_GAME } from './consts'

themeToggleHandler()
langToggleHandler()

const startGameBtn = document.getElementById('startGame')
const lang = localStorage.getItem('lang') ?? 'RU'

startGameBtn.innerText = START_GAME[lang]

startGameBtn.addEventListener('click', () => {
	startGameHandler()
})
