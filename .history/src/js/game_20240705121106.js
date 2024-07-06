import { WORDS } from "./consts"

const gameDiv = document.getElementById('game')

const createPlaceholders = () => {
	const word = sessionStorage.getItem('word')

	// const wordArray = Array.from(word)
	// const letterPlaceholder = wordArray.reduce(
	// 	(acc, cur, i) => acc + `<h1 id='letter_${i}' class='letter'>_</h1>`, ''
	// )

	Array.from('_'.repeat(word.length)).reduce(
		
	)

	return `<div id='placeholders' class='placeholders-wrap'>${letterPlaceholder}</div>`

	// let letterPlaceholder = ''

	// for (let i = 0; i < word.length; i++) {
	// 	letterPlaceholder += `<h1 id='letter_${i}' class='letter'>_</h1>`
	// }

	// return `<div id='placeholders' class='placeholders-wrap'>${letterPlaceholder}</div>`
}

export const startGameHandler = () => {
	const randomIndex = Math.floor(Math.random() * WORDS.length)
	const wordToGues = WORDS[randomIndex]

	sessionStorage.setItem('word', wordToGues)
	gameDiv.innerHTML = createPlaceholders()
}