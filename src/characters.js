export default class Character {
    constructor(name, type, attack, defence) {
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ]

        if (name.length >= 2 && name.length <= 10) {
            this.name = name;
        }
        else {
            throw new Error("Ошибка");
        }
        if ( types.includes(type) ) {
            this.type = type;
        } 
        else {
            throw new Error("Ошибка");
        }

        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {

        if ( this.health >= 0 ) {
            this.level++;
            this.attack = this.attack + this.attack * 0.2;
            this.defence = this.defence + this.defence * 0.2;
            this.health = 100;
        } else { throw new Error("Нельзя повысить уровень умершего") }

    }

    damage(points) {

        if ( this.health >= 0 ) {
            this.health -= points * ( 1 - this.defence / 100 );
        } else { throw new Error("Нельзя наносить вред умершему") }

    }
}