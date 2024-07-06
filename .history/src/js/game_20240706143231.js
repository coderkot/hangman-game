import { WORDS, KEYBOARD, TRIES, RU_WORDS, RU_KEYBOARD } from './consts'

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
	const usedKeyboard = localStorage.getItem('lang') === 'EN' ? KEYBOARD : RU_KEYBOARD
	keyboard.classList.add('keyboard')
	keyboard.id = 'keyboard'

	const keyboardHTML = usedKeyboard.reduce(
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
				document.getElementById(`letter_${i}`).innerText = inputLetter.toUpperCase()
			}
		})
	}
}

const stopGame = (status) => {
	const word = sessionStorage.getItem('word')

	document.getElementById('placeholders').remove()
	document.getElementById('tries').remove()
	document.getElementById('keyboard').remove()

	if (status === 'win') {

	} else if (status === 'lose')
}

export const startGameHandler = () => {
	const usedWords = localStorage.getItem('lang') === 'EN' ? WORDS : RU_WORDS
	const randomIndex = Math.floor(Math.random() * usedWords.length)
	const wordToGues = usedWords[randomIndex]
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
			e.target.disabled = true
			checkLetter(e.target.id)
		}
	})

	gameDiv.prepend(hangmanImg)
	gameDiv.appendChild(keyboardDiv)
}
