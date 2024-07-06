import { WORDS } from "./consts"

const gameDiv = document.getElementById('game')

export const startGameHandler = () => {
	const randomIndex = Math.floor(Math.random() * WORDS.length)
	const wordToGues = WORDS[randomIndex]

	sessionStorage.setItem('word', wordToGues)

	gameDiv.innerHTML = a
}