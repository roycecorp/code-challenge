"use strict";
/**
 * 1. Write a method on Hero that finds its best possible partner: the best possible partner is the one with the least amount of overlapping superpowers
 * 2. Bonus: Write a function that filters superheroes based on their superpowers.
 */
var Powers;
(function (Powers) {
    Powers[Powers["SUPER_TECH"] = 0] = "SUPER_TECH";
    Powers[Powers["SUPER_STRENGTH"] = 1] = "SUPER_STRENGTH";
    Powers[Powers["FLIGHT"] = 2] = "FLIGHT";
    Powers[Powers["INVISIBILITY"] = 3] = "INVISIBILITY";
    Powers[Powers["WEATHER_CONTROL"] = 4] = "WEATHER_CONTROL";
    Powers[Powers["SEALIFE_CONTROL"] = 5] = "SEALIFE_CONTROL";
    Powers[Powers["SUPER_SPEED"] = 6] = "SUPER_SPEED";
    Powers[Powers["SUPER_WEALTH"] = 7] = "SUPER_WEALTH";
    Powers[Powers["X_RAY_VISION"] = 8] = "X_RAY_VISION";
    Powers[Powers["SUPER_AGILITY"] = 9] = "SUPER_AGILITY";
    Powers[Powers["MIND_READING"] = 10] = "MIND_READING";
    Powers[Powers["SELF_HEALING"] = 11] = "SELF_HEALING";
    Powers[Powers["SWIMMING_PROWESS"] = 12] = "SWIMMING_PROWESS";
    Powers[Powers["UNDERWATER_BREATHING"] = 13] = "UNDERWATER_BREATHING";
})(Powers || (Powers = {}));
class Hero {
    constructor(name, powers) {
        this.name = name;
        this.powers = powers;
    }
}
const batman = new Hero("batman", [Powers.SUPER_WEALTH, Powers.SUPER_TECH]);
const superman = new Hero("superman", [Powers.SUPER_STRENGTH, Powers.FLIGHT, Powers.X_RAY_VISION, Powers.SUPER_SPEED, Powers.SELF_HEALING]);
const aquaman = new Hero("aquaman", [Powers.SWIMMING_PROWESS, Powers.SEALIFE_CONTROL, Powers.UNDERWATER_BREATHING]);
const storm = new Hero("storm", [Powers.WEATHER_CONTROL, Powers.FLIGHT]);
const hulk = new Hero("hulk", [Powers.SUPER_STRENGTH, Powers.SELF_HEALING]);
const ironman = new Hero("ironman", [Powers.SUPER_STRENGTH, Powers.SELF_HEALING, Powers.SUPER_WEALTH, Powers.FLIGHT, Powers.SUPER_TECH]);
const mera = new Hero("mera", [Powers.SUPER_STRENGTH, Powers.UNDERWATER_BREATHING, Powers.SWIMMING_PROWESS]);
const ultraboy = new Hero("ultraboy", [Powers.X_RAY_VISION, Powers.SUPER_STRENGTH, Powers.SUPER_SPEED]);
//1. ======================================================
//2. ======================================================
function filter(heroes, superPower) {
    return heroes.filter(el => el.powers.includes(superPower));
}
const canFly = filter([batman, superman, aquaman], Powers.FLIGHT); // -> [ { name: "superman", powers: [...] }, { name: "storm", powers: [...] }, { name: "ironman", powers: [...] } ]
console.log(canFly);
//# sourceMappingURL=challenge.js.map