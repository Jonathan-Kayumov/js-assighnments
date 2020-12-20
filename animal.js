class Animal {
    animalType = "gneneric animal";
    constructor(name) {
        this.name = name;
    }
    animalMakesSound = () => {
        console.log("animal type = " + this.animalType);
        console.log("the " + this.name + " makes generic sound");
    }
}

let pete = new Animal("pete");
pete.animalType = "yorkie";
let lucy = new Animal("lucy");
lucy.animalType = "korgie";
let marry = new Animal("marry");
marry.animalType = "pidgeon";

const animalArray = [pete, lucy, marry];
for (i = 0; i < animalArray.length; i++) {
    animalArray[i].animalMakesSound()
}