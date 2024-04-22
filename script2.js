// EJERCICIO 2

/* ----- WARRIOR ----- */
class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    attack() {
        return this.power;
    }
    defend(damage) {
        this.life -= damage;
        console.log(`La vida restante es de: ${this.life}, después de daño: ${damage}`);
    }
}

/* ----- MAYA from WARRIOR ----- */
class Maya extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkColaCao() {
        this.power += 10;
        console.log(`El warrior ha bebido ColaCao y ha ganado 10 de ataque, con un total de: ${this.power} ATK`);
    }
}

/* ----- AZTEC from WARRIOR ----- */
class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkNesquik() {
        this.life += 10;
        console.log(`El warrior ha bebido Nesquik y ha ganado 10 de vida, con un total de: ${this.life} HP`);
    }
}

/* ----- INTERCAMBIO DE GOLPES ----- */
let miMaya = new Maya(1500, 250)
let miAztec = new Aztec(1500, 250)

miAztec.drinkNesquik();
miMaya.drinkColaCao();

let ataqueMaya = miMaya.attack();
miAztec.defend(ataqueMaya);

miAztec.defend(miMaya.attack());

miMaya.defend(miAztec.attack());
