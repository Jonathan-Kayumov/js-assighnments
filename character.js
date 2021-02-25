var hp = 20;
var attack = 5;

function damage() {
    hp = hp - attack;

    if (hp <= 0) {
        console.log("you died");
    }
    else {
        console.log("you have " + hp + " health");
    }
}


damage();