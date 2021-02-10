
class animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
}

function animalMakesSound() {
    console.log("the ", animal.name, "goes ", animal.sound);
}

animalMakesSound();