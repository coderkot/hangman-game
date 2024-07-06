import { WORDS, KEYBOARD, TRIES } from './consts'

const gameDiv = document.getElementById('game')
const logo = document.getElementById('logo')

let triesLeft

const createPlaceholders = () => {
	const word = sessionStorage.getItem('word')

	const wordArray = Array.from(word)
	const letterPlaceholder = wordArray.reduce(
		(acc, cur, i) => acc + `<h1 id='letter_${i}' class='letter'>_</h1>`,
		''
	)

	return `<div id='placeholders' class='placeholders-wrap'>${letterPlaceholder}</div>`
}

const createKeyboard = () => {
	const keyboard = document.createElement('div')
	keyboard.classList.add('keyboard')
	keyboard.id = 'keyboard'

	const keyboardHTML = KEYBOARD.reduce(
		(acc, cur) =>
			acc + `<button class='button-primary keyboard-button' id='${cur}'>${cur}</button>`,
		''
	)

	keyboard.innerHTML = keyboardHTML
	return keyboard
}

const drawHangman = () => {
	const img = document.createElement('img')
	img.alt = 'hangman image'
	img.classList.add('hangman-img')
	img.id = 'hangman-img'

	img.src = 'images/hangman/hg-0.png'

	return img
}

const checkLetter = (letter) => {
	const word = sessionStorage.getItem('word')
	const inputLetter = letter.toLowerCase()

	if(!word.includes(inputLetter)) {
		const triesCounter = document.getElementById('tries-left')
		triesLeft -= 1
		triesCounter.innerText = triesLeft

		const hangmanImg = document.getElementById('hangman-img')
		hangmanImg.src = `images/hangman/hg-${TRIES - triesLeft}.png`
	} else {
		const wordArray = Array.from(word)
		wordArray.forEach((currentLetter, i) => {
			if(currentLetter === inputLetter) {
				document.getElementById(``)
			}
		})
	}
}

export const startGameHandler = () => {
	const randomIndex = Math.floor(Math.random() * WORDS.length)
	const wordToGues = WORDS[randomIndex]
	const keyboardDiv = createKeyboard()
	const hangmanImg = drawHangman()

	triesLeft = TRIES

	logo.classList.add('logo-sm')

	sessionStorage.setItem('word', wordToGues)
	gameDiv.innerHTML = createPlaceholders()

	gameDiv.innerHTML +=
		`<p id="tries" class="mt-2">TRIES LEFT: <span id="tries-left" class="font-medium text-red-600">${TRIES}</span></p>`

	keyboardDiv.addEventListener('click', (e) => {
		if (e.target.tagName.toLowerCase() === 'button') {
			checkLetter(e.target.id)
		}
	})

	gameDiv.prepend(hangmanImg)
	gameDiv.appendChild(keyboardDiv)
}
