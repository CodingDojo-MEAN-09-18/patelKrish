// Assignment: Ninja Class

function Ninja(name,health)
{
    // Speed and strength should be 3 by default.
    var speed = 3;
    var strength = 3;
    
    // Health should be 100 by default.
    if (health == undefined) 
    {
        health = 100;
    }

    // initialize var
    this.name = name;
    this.health = health;

    // sayName() - This should log that Ninja's name to the console.
    this.sayName = function() 
    {
        console.log("My ninja name is " + this.name + "!");
    }

    // showStats() - This should show the Ninja's name, strength, speed, and health.
    this.showStats = function()
    {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }

    // drinkSake() - This should add +10 Health to the Ninja
    this.drinkSake = function()
    {
        this.health += 10;
    }
}

var ninja = new Ninja('Krishna', 50);

ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();
