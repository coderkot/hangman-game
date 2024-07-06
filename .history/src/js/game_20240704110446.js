import { WORDS } from "./consts"

export const startGameHandler = () => {
	// const startGameBtn = document.getElementById('startGame')

	// let count = 0
	// startGameBtn.addEventListener('click', () => {
	// 	startGameBtn.innerText = `Start game ${count++}`
	// })
	const randomIndex = Math.floor(Math.random() * WORDS.length)
	const wordToGues = WORDS[randomIndex]
}