import { WORDS } from "./consts"

const gameDiv = document.getElementById('game')

const createPlaceholders = () => {
	const word = sessionStorage.getItem
	let letterPlaceholder = ''

	for (let i = 0; i < wordToGues.length; i++) {
		letterPlaceholder += `<h1 id='letter_${i}' class='letter'>_</h1>`
	}

	gameDiv.innerHTML = `<div id='placeholders' class='placeholders-wrap'>${letterPlaceholder}</div>`
}

export const startGameHandler = () => {
	const randomIndex = Math.floor(Math.random() * WORDS.length)
	const wordToGues = WORDS[randomIndex]

	sessionStorage.setItem('word', wordToGues)
	createPlaceholders()
}