import { WORDS } from "./consts"

const gameDiv

export const startGameHandler = () => {
	// const startGameBtn = document.getElementById('startGame')

	// let count = 0
	// startGameBtn.addEventListener('click', () => {
	// 	startGameBtn.innerText = `Start game ${count++}`
	// })
	const randomIndex = Math.floor(Math.random() * WORDS.length)
	const wordToGues = WORDS[randomIndex]

	sessionStorage.setItem('word', wordToGues)
}