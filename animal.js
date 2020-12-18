
class animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
}

let myAnimal = new animal("lion", "roar");

function animalMakesSound() {
    console.log("the ", animal.name, "goes ", animal.sound);
}

animalMakesSound();