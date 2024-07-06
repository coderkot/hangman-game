import '../css/style.css'
import { themeToggleHandler, langToggleHandler } from './utils'
import { startGameHandler } from './game'

themeToggleHandler()
langToggleHandler()

const startGameBtn = document.getElementById('startGame')

localStorage.getItem('lang') === 'EN' ? startGameBtn.innerText = 'Start game' : 'Начать игру'

startGameBtn.addEventListener('click', () => {
	startGameHandler()
})
