// TypeScript Bikes - OOP
// create a new class called Bike with the following properties/attributes:
// price
// max_speed
// miles
// Create 3 instances of the Bike class.
// Use the constructor() function to specify the price and max_speed of each instance (e.g. let bike1 = new Bike(200, "25mph"); 
// also write the code so that the initial miles is set to be 0 whenever a new instance is created.
var Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        var _this = this;
        // Add the following functions to this class:
        // displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
        this.displayInfo = function () {
            console.log("The price of the bike is $" + _this.price + " with the maximum speed of " + _this.max_speed + " and the total miles is " + _this.miles + " miles.");
        };
        // ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
        this.ride = function () {
            console.log('Riding');
            this.miles += 10;
            return this;
        };
        // reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
        this.reverse = function () {
            console.log('Reversing');
            if (this.miles >= 10) {
                this.miles -= 10;
            }
            return this;
        };
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    return Bike;
}());
var bike_one = new Bike(300, "35mph");
var bike_two = new Bike(120, "80mph");
var bike_three = new Bike(284, "50mph");
// Have the first instance ride three times, reverse once and have it displayInfo(). 
bike_one.ride().ride().ride().reverse().displayInfo();
// Have the second instance ride twice, reverse twice and have it displayInfo(). 
bike_two.ride().ride().reverse().reverse().displayInfo();
// Have the third instance reverse three times and displayInfo().
bike_three.reverse().reverse().reverse().displayInfo();
// What would you do to prevent the instance from having negative miles?
// Which methods can return this in order to allow chaining methods?
