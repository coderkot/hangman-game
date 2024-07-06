import { WORDS, KEYBOARD } from "./consts"

const gameDiv = document.getElementById('game')

const createPlaceholders = () => {
	const word = sessionStorage.getItem('word')

	const wordArray = Array.from(word)
	const letterPlaceholder = wordArray.reduce(
		(acc, cur, i) => acc + `<h1 id='letter_${i}' class='letter'>_</h1>`, ''
	)

	return `<div id='placeholders' class='placeholders-wrap'>${letterPlaceholder}</div>`
}

const createKeyboard = () => {
	const keyboard = document.createElement('div')
	keyboard.classList.add('keyboard')
	keyboard.id = 'keyboard'

	const keyboardHTML = KEYBOARD.reduce(
		(acc, cur) => acc + `<button class='button-primary keyboard-button' id='${cur}'>${cur}</button>`, ''
	)

	keyboard.innerHTML = keyboardHTML
	return keyboard
}

const drawHangman = () => {
	const img = document.cre
}

export const startGameHandler = () => {
	const randomIndex = Math.floor(Math.random() * WORDS.length)
	const wordToGues = WORDS[randomIndex]
	const keyboardDiv = createKeyboard()

	sessionStorage.setItem('word', wordToGues)
	gameDiv.innerHTML = createPlaceholders()

	gameDiv.innerHTML += '<p id="tries" class="mt-2">TRIES LEFT: <span id="tries-left" class="font-medium text-red-600">10</span></p>'

	keyboardDiv.addEventListener('click', (e) => {

	})
	gameDiv.appendChild(keyboardDiv)
}