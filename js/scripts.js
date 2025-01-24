console.log('JavaScript is running.')

// add correct year to footer
const rightNow = new Date()
document.querySelector('#year').textContent = rightNow.getFullYear()

// navigation stuff
const navElement = document.querySelector('#theNav')
const btnElement = document.querySelector('#theButton')

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')
})