// console.log('Hello world')  // test connectivity to developer console

//
// set up the counter button functionality
//

let count = 0
const counterText = document.getElementById('counter')

function increase() {
    count++
    // console.log("count: ", count)
    setCounterText()
}

function decrease() {
    count--
    // console.log("count: ", count)
    setCounterText()
}

function reset() {
    count = 0
    // console.log("count: ", count)
    setCounterText()
}

function setCounterText() {
    counterText.textContent = String(count)
}

const plusButton = document.querySelector('#plus-btn')
const minusButton = document.getElementById('minus-btn')
const resetButton = document.getElementById('reset-btn')

// console.log(plusButton)

plusButton.addEventListener('click', increase)
minusButton.addEventListener('click', decrease)
resetButton.addEventListener('click', reset)

//
// set up the theme changes by applying new classes to body, main, and the theme buttons
//

const buttons = document.querySelectorAll('.theme-buttons')

function selectTheme(event) {
    const theme = event.target.textContent

    const body = document.querySelector('body')
    const main = document.querySelector('main')

    main.className = theme
    body.className = theme

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}

for(let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', selectTheme)
}