export const WORDS = {
	EN: ['code', 'frontend', 'programming'],
	RU: ['код', 'пельмень', 'жопа'],
}

const EN_KEYBOARD = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const RU_KEYBOARD = Array.from('АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ')

export const KEYBOARD = {
	EN: EN_KEYBOARD,
	RU: RU_KEYBOARD,
}

export const STATUS = {}

export const RESULT = {
	EN: { win: 'You won!!!', lose: 'You lose...' },
	RU: { win: 'Ты победил!!!', lose: 'Ты проиграл...' },
}

export const TRIES_TEXT = {
	EN: 'TRIES LEFT',
	RU: 'ОСТАЛОСЬ ПОПЫТОК',
}

export const RESULT_WORD = {
	EN: 'The word was: ',
	RU: 'Загаданное слово: ',
}

export const PLAY_AGAIN = {
	EN: 'Play again',
	RU: 'Играть снова',
}

export const TRIES = 10
