// Assignment: JavaScript Objects

// Objectives:

// Assess your familiarity with JavaScript, particularly iterating over arrays and objects.

// Challenge 1

// Write a function that accepts an array of student objects, as shown below. 
// Print all of the students' names and their cohorts.

var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(var key in students)
{
    console.log('Name: ' + students[key].name + ', Cohort: ' + students[key].cohort)
}

// Challenge 2

// Write a function that accepts an object of users divided into employees and managers, 
// as shown below, and logs the information to the console.

var users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
}

for(var key in users)
{
    console.log(key.toUpperCase())
    for(var val in users[key])
    {
        i = parseInt(val) + 1;
        console.log(i + " - " + users[key][val].last_name.toUpperCase() + ", " + users[key][val].first_name.toUpperCase() + " - " + (users[key][val].last_name + users[key][val].first_name).length)
        a = 'foae'
    }
}