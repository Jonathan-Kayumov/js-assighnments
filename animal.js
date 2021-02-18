class Animal {
    animalType = "gneneric animal";
    constructor(name) {
        this.name = name;
    }
    animalMakesSound = () => {
        console.log("animal type = " + this.animalType);
        console.log("the " + this.name + " makes generic sound");
    }
    animalMakesSound = () => {
        console.log("the " + this.name + " goes " + this.sound);
    }
}

module.exports = animal;
