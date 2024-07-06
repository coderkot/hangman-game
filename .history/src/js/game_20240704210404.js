import { WORDS } from "./consts"

const gameDiv = document.getElementById('game')

export const startGameHandler = () => {
	const randomIndex = Math.floor(Math.random() * WORDS.length)
	const wordToGues = WORDS[randomIndex]

	sessionStorage.setItem('word', wordToGues)

	let acc = ''

	for (let i = 0; i < wordToGues.length; i++) {
		acc += `<h1 id=`
	}

	gameDiv.innerHTML = acc
}