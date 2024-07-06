import '../css/style.css'
import {}

const startGameBtn = document.getElementById('startGame')

let count = 0
startGameBtn.addEventListener('click', () => {
	startGameBtn.innerText = `Start game ${count++}`
})

