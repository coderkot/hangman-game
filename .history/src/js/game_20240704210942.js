import { WORDS } from "./consts"

const gameDiv = document.getElementById('game')

const createPlace

export const startGameHandler = () => {
	const randomIndex = Math.floor(Math.random() * WORDS.length)
	const wordToGues = WORDS[randomIndex]

	sessionStorage.setItem('word', wordToGues)
}