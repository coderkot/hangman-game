export const WORDS = {
	EN: [
		'apple',
		'orange',
		'sun',
		'car',
		'friend',
		'summer',
		'winter',
		'school',
		'phone',
		'computer',
	],
	RU: [
		'яблоко',
		'апельсин',
		'пингвин',
		'солнце',
		'ракета',
		'аквапарк',
		'радуга',
		'часы',
		'книга',
		'дружба',
		'трактор',
		'лето',
	],
}

const EN_KEYBOARD = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const RU_KEYBOARD = Array.from('АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ')

export const KEYBOARD = {
	EN: EN_KEYBOARD,
	RU: RU_KEYBOARD,
}

export const STATUS = { win: 'win', lose: 'lose', quit: 'quit' }

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

export const QUIT = {
	EN: 'Quit',
	RU: 'Выйти',
}

export const CONFIRM_MESSAGE = {
	EN: 'Are you sure you want to quit and lose progress?',
	RU: 'Вы уверены, что хотите выйти и потерять прогресс?',
}

export const TRIES = 10
