// Assignment: Ninja Class II

// Complete the below challenges using Ninja from the previous assignment.

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

    // setter - speed
    this.setSpeed = function() { return speed; }
    // getter - speed
    this.getSpeed = function(mph) {
        updateSpeed(mph);
        return this;
    }

    // setter - strength
    this.setStrength = function() { return strength; }
    // getter - strength
    this.getStrength = function(mus) {
        updateStrength(mus);
        return this;
    }

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

    // .punch()
    // Add a new method to Ninja called .punch().
    this.punch = function(ninja)
    {
        if (ninja instanceof Ninja)
        {
            // This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. 
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        }
        else
        {
            throw new Error('This is not an instance!')
        }
    } 

    // .kick()
    // Now add a method to your Ninja class called .kick(). 
    this.kick = function(ninja)
    {
        if (ninja instanceof Ninja)
        {
            var kickNinja = 0;
            // Kick will subtract 15 Health for each point of Strength the calling Ninja has,
            // and like .punch() will take another Ninja instance.
            for (let i = 0; i < ninja.setStrength(); i++) 
            {
                kickNinja += 15;
            }

            ninja.health -= kickNinja;
            
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + kickNinja + " Health!")
        }
        else
        {
            throw new Error('This is not an instance!')
        }
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");

redNinja.punch(blueNinja);
blueNinja.kick(redNinja);