/**
 * 1. Write a method on Hero that finds its best possible partner: the best possible partner is the one with the least amount of overlapping superpowers
 * 2. Bonus: Write a function that filters superheroes based on their superpowers.
 */

enum Powers {
    SUPER_TECH,
    SUPER_STRENGTH,
    FLIGHT,
    INVISIBILITY,
    WEATHER_CONTROL,
    SEALIFE_CONTROL,
    SUPER_SPEED,
    SUPER_WEALTH,
    X_RAY_VISION,
    SUPER_AGILITY,
    MIND_READING,
    SELF_HEALING,
    SWIMMING_PROWESS,
    UNDERWATER_BREATHING
}

class Hero {

    public name: string
    public powers: Powers[]

    constructor(name: string, powers: Powers[]){
        this.name = name
        this.powers = powers
    }

    // findPartner(heroes: Hero[]): Hero {
       
    // }
}

const batman    = new Hero("batman",   [Powers.SUPER_WEALTH, Powers.SUPER_TECH])
const superman  = new Hero("superman", [Powers.SUPER_STRENGTH, Powers.FLIGHT, Powers.X_RAY_VISION, Powers.SUPER_SPEED, Powers.SELF_HEALING])
const aquaman   = new Hero("aquaman",  [Powers.SWIMMING_PROWESS, Powers.SEALIFE_CONTROL, Powers.UNDERWATER_BREATHING])
const storm     = new Hero("storm",    [Powers.WEATHER_CONTROL, Powers.FLIGHT])
const hulk      = new Hero("hulk",     [Powers.SUPER_STRENGTH, Powers.SELF_HEALING])
const ironman   = new Hero("ironman",  [Powers.SUPER_STRENGTH, Powers.SELF_HEALING, Powers.SUPER_WEALTH, Powers.FLIGHT, Powers.SUPER_TECH])
const mera      = new Hero("mera",     [Powers.SUPER_STRENGTH, Powers.UNDERWATER_BREATHING, Powers.SWIMMING_PROWESS])
const ultraboy  = new Hero("ultraboy", [Powers.X_RAY_VISION, Powers.SUPER_STRENGTH, Powers.SUPER_SPEED])

//1. ======================================================



//2. ======================================================


function filter(heroes: Hero[], superPower: Powers) {
    
}

//const canFly = filter([batman, superman, aquaman], Powers.FLIGHT) // -> [ Hero { name: 'superman', powers: [ 1, 2, 8, 6, 11 ] } ]
//console.log(canFly)