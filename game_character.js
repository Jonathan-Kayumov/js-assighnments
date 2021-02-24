class genericGameCharacter {
    constructor(name, type, attack, healthPoints) {
        this.name = name;
        this.type = type;
        this.attack = attack;
        this.healthPoints = healthPoints;
    }
    genericGameCharacterStats = () => {
        console.log("The hero's name is " + this.name + ". " + this.name + "class is " + this.type + ". " + this.name + "DPS is " + this.attack + ". " + this.name + "HP is" + this.healthPoints + ". ");
    }
}

let myCharacter = new character("Hanaqui", "crusader", "15", "105");

myCharacter.genericGameCharacter();