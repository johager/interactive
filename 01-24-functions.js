
let jonSnowHealth = 100
let str = String(jonSnowHealth)

// console.log(str)

let theWinnerIs = "Jamie is the winner"

let newWinner = theWinnerIs.replaceAll("Jamie", "Jon")

// console.log(newWinner)

// if (newWinner.includes("Jon")) {
//     console.log("Includes Jon")
// } else {
//     console.log("Doesn't include Jon")
// }

// if (newWinner.toLowerCase().includes("jon")) {
//     console.log("The name replace worked")
// }

let newWinnerLower = newWinner.toLowerCase()
let newWinnerSplit = newWinnerLower.split(" ")
// console.log(newWinnerSplit)

let newWinnerKabob = newWinnerSplit.join("-")
// console.log(newWinnerKabob)

function isJonAlive() {
    if (jonSnowHealth > 0) {
        console.log("Jon is alive!")
    } else {
        console.log("RIP Jon Snow")
    }
}

isJonAlive()

function surpriseAttack(attack) {
    jonSnowHealth -= attack
    console.log("Surprise attack", attack," Jon's health is now", jonSnowHealth)
    isJonAlive()
}

// surpriseAttack(20)
// surpriseAttack(12)
// surpriseAttack(6)
// isJonAlive()

function greeting(person1, person2) {
    console.log(`${person1} and ${person2} say hello to each other.`)
}

// greeting('Jon Snow', 'Ned Stark')

function rollDice() {
    let possibleRolls = [1,2,3,4,5,6]
    let randomNumber = Math.floor(Math.min(Math.random() * possibleRolls.length), 5)
    return possibleRolls[randomNumber]
}

function rollDice2() {
    let randomNumber = Math.floor(Math.min(Math.random() * 6))
    return randomNumber
}

// console.log(rollDice())
// console.log(rollDice())
// console.log(rollDice())
// console.log(rollDice())


// function diceMultiplier() {
//     let firstRoll = rollDice()
//     let secondRoll = rollDice()
//     console.log("first: ",firstRoll)
//     console.log("second: ",secondRoll)
//     console.log(firstRoll * secondRoll)
// }

// diceMultiplier()

// const diceMultiplier2 = () => console.log(rollDice() * rollDice())
// diceMultiplier2()


console.log(rollDice2())