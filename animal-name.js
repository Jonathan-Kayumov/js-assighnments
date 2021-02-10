class dog extends animal {
    constructor(type, size) {
        this.type = type
        this.size = size
    }
}

let myDog = new dog("poodle", "small");

animalMakesSound();