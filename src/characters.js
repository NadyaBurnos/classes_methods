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

        if (name.length < 2 || name.length > 10) {
            throw new Error("Ошибка");
        } else if (types.indexOf(type) === -1) {
            throw new Error("Ошибка");
        }
        this.name = name;
        this.type = type;

        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {

        if ( this.health < 0 ) {
            throw new Error("Нельзя повысить уровень умершего");
        } 
        this.level++;
        this.attack = this.attack + this.attack * 0.2;
        this.defence = this.defence + this.defence * 0.2;
        this.health = 100; 

    }

    damage(points) {

        if ( this.health < 0 ) {
            throw new Error("Нельзя наносить вред умершему");
        }
        this.health -= points * ( 1 - this.defence / 100 );
        

    }
}