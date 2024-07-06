import '../css/style.css'
import { themeToggleHandler, langToggleHandler } from './utils'
import { startGameHandler } from './game'

themeToggleHandler()
langToggleHandler()

const startGameBtn = document.getElementById('startGame')

localStorage.setItem('lang', 'RU')
localStorage.getItem('lang') === 'EN'
	? (startGameBtn.innerText = 'Start game')
	: (startGameBtn.innerText = 'Начать игру')

startGameBtn.addEventListener('click', () => {
	startGameHandler()
})
