let backpack = []

backpack.push("Sword")
backpack.push("Shield")
backpack.push("Food")

console.log("Initial backpack:", backpack)

//backpack.shift()  // remove first item
backpack.splice(0, 1)  // remove first item

let furCoat = "Fur Coat"
backpack.push(furCoat)

backpack.pop()  // remove last item

// let itemCount = backpack.length
//console.log("itemCount:", itemCount)

backpack.push("flint", "blanket", "knife", "toothbrush")

let backpack2 = backpack.splice(3, 3)  // move "blanket", "knife", "toothbrush" to backpack2

console.log("Current backpack:", backpack)
console.log("Current backpack2:", backpack2)

// backpack.push("hat")
backpack.pop()

for (let i = 0; i < backpack.length; i++) {
    console.log(`backpack[${i}]:`, backpack[i])
}

for (let i = 0; i < backpack2.length; i++) {
    console.log(`backpack2[${i}]:`, backpack2[i])
}

// for (i in backpack2) {
//     console.log(`backpack2[${i}]:`, backpack2[i])
// }

// for (let i = 0; i < 3; i++) {
//     console.log(`backpack[${i}]:`, backpack[i])
// }

if (backpack.length >= 3) {
    for (let i = 0; i < 3; i++) {
        console.log(`backpack[${i}]:`, backpack[i])
    }
} else {
    for (let i = 0; i < backpack.length; i++) {
        console.log(`backpack[${i}]:`, backpack[i])
    }
}

// What is the final value of guessMe?

let guessMe = 54


while (guessMe < 100) {
    console.log("------------", guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log("div by 4 or 5, add 25")
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log("div by 3, sub 27")
        guessMe -= 27
    } else {
        console.log("else add 3")
        guessMe += 3
    }
    console.log("add 22")
    guessMe += 22
}

console.log("final guessMe",guessMe)