
// object

let person = {
    firstName: 'James',
    lastName: 'Hager',
    age: 54
}

console.log(person.firstName)
console.log(person['lastName'])

for (let key in person) {
    console.log("key:", key, "val:", person[key])
}

let meal = {
    appetizer: 'cheese',
    entree: 'chicken piccata',
    dessert: 'tiramisu',
    drink: 'chianti'
}

// destructure dessert from meal
let {dessert} = meal
console.log(dessert)

// destructure appetizer & entree from meal
let {appetizer, entree} = meal
console.log(dessert, appetizer, entree)

// destructure drink and alias it
// let {drink: myDrink} = meal
// console.log(myDrink)

// destructure all meal properties and alias them
let {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

console.log(myAppetizer, myEntree, myDessert, myDrink)

// add a property
person.job = 'unemployed'
console.log(person)

person['pets'] = ['duck','shetland pony']
console.log(person)

// delete property
delete person.pets
console.log(person)

//
// --- Classes ---
//

class Dog {
    constructor(dogName, dogBreed, dogAge) {
        this.name = dogName
        this.breed = dogBreed
        this.age = dogAge
        this.lovesBones = true
    }
    
    greeting() {
        console.log(`Hi, my name is ${this.name} and I am a(n) ${this.age}-year-old ${this.breed}.`)
    }
}

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel) {
        super(name, breed, age)
        this.trainingLevel = trainingLevel
    }

    levelUp(num) {
        this.trainingLevel += num
    }

    greeting() {
        super.greeting()
        console.log(`I am a puppy at training level ${this.trainingLevel}.`)
    }
}

let myDog = new Dog('myDog', 'mutt', 5)
console.log(myDog)

let lassie = new Dog('Lassie', 'collie', 18)
lassie.lovesBones = false
console.log(lassie)

let beethoven = new Dog('Beethoven', 'St. Bernard', 12)
console.log(beethoven)

let dogs = [lassie, beethoven]
console.log(dogs)

lassie.greeting()

// extra credit :)
let foundLassie = dogs.filter(dog => dog.name === 'Lassie')
console.log(foundLassie[0])

for (let key in lassie) {
    console.log(lassie[key])
}

let chief = new Puppy('Chief', 'lab', 1, 0)
console.log(chief)

chief.levelUp(5)
console.log(chief)

chief.greeting()