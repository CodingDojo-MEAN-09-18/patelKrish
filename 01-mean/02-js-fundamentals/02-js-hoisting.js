// Assignment: JavaScript Hoisting
// Objectives:

// Practice reading JavaScript the same way as the interpreter reads it.

// 1
console.log(hello);    // undefined                                
var hello = 'world';    // declare hello var equals world

// 2
var needle = 'haystack';    // variable needle equals haystack
test();                     // no test() function exists
function test(){    
	var needle = 'magnet';      
	console.log(needle);        // print 'magnet'
}

// 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);   // print only okay if print() called
}
console.log(brendan);       // super cool --> output

// 4
var food = 'chicken';
console.log(food);          // 'chicken'
eat();                      // half chicken 
function eat(){
	food = 'half-chicken';
	console.log(food);      // 'half-chicken'
	var food = 'gone';
}

// 5
mean();                     // error
console.log(food);          // chicken
var mean = function() {
	food = "chicken";
	console.log(food);        // chicken
	var food = "fish";
	console.log(food);          // fish
}
console.log(food);          //chicken

// 6
console.log(genre);         // nothing
var genre = "disco";
rewind();                   // error
function rewind() {
	genre = "rock";
	console.log(genre);         //rock
	var genre = "r&b";
	console.log(genre);         // r&b
}
console.log(genre);             //disco

// 7
dojo = "san jose";
console.log(dojo);              // san jose
learn();                        // error
function learn() {
	dojo = "seattle";
	console.log(dojo);          // seattle
	var dojo = "burbank";
	console.log(dojo);          // burbank
}
console.log(dojo);      // san jose

// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }