class Character {
    hp = 0;
    constructor(hp) {
        this.hp = hp;
    }
    damage = (attack) => {
        this.hp = this.hp - attack;
    }
    currentHealth = () => {
        console.log("you have " + this.hp + " health");
        if (this.hp <= 0) {
            console.log("You died");
        }
    }
}

let character1 = new Character(100);
character1.currentHealth();

character1.damage(100);

character1.currentHealth();
