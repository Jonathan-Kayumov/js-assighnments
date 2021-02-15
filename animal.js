
class animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    animalMakesSound = () => {
        console.log("the " + this.name + " goes " + this.sound);
    }
}

module.exports = animal;