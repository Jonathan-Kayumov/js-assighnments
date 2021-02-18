let animal = require('./animal');

class dog extends animal {
    constructor(type, size) {
        super(
            type, size
        )
    }
}

let myDog = new dog("poodle", "bark");

myDog.animalMakesSound();