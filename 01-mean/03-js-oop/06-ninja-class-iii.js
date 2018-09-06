// Assignment: Ninja Class III

// Part I

class Ninja 
{
    constructor(name,health,speed,strength) 
    {
        // Speed and strength should be 3 by default. Health should be 100 by default.
        if (health == null) { health = 100; }
        if (speed == null) { speed = 3; }
        if (strength == null) { strength = 3; }

        this._name = name;
        this._health = health;
        this._speed = speed;
        this._strength = strength;
    }

    // getter
    get name() { return this._name; }
    get health() { return this._health; }
    get speed() { return this._speed; }
    get strength() { return this._strength; }

    // // setter
    set name(name) { this._name = name; }
    set health(health) { this._health = health; }
    set speed(speed) { this._speed = speed; }
    set strength(strength) { this._strength = strength; }

    // The Ninja class should have the following methods:

    // sayName() - This should log that Ninja's name to the console.
    sayName()
    {
        console.log("My ninja name is " + this.name + "!");
    }

    // showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats()
    {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    // drinkSake() - This should add +10 health to the Ninja
    drinkSake()
    {
        this.health += 10;
    }

};

// Part II - Sensei Class

// Extend the Ninja class and create the Sensei class. 
class Sensei extends Ninja 
{
    constructor(name,health,speed,strength,wisdom) 
    {
        // A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
        if (health == null) { health = 200; }
        if (speed == null) { speed = 10; }
        if (strength == null) { strength = 10; }
        // In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. 
        if (wisdom == null) { wisdom = 10; }

        super(name,health,speed,strength);
        this.wisdom = wisdom;
    }

    // add the speakWisdom() method. 
    speakWisdom()
    {
        // speakWisdom() should call the drinkSake() method from the Ninja class
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"