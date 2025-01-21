console.log('JavaScript is running.')

// add correct year to footer
const rightNow = new Date()
document.querySelector('#year').textContent = rightNow.getFullYear()
