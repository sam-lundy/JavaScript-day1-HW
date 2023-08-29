//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

// This is assuming we want to match regardless of casing
// uses the method .toLowerCase()

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(){
    for (let name of dog_names){
        if (dog_string.toLowerCase().includes(name.toLowerCase())) {
            console.log(`Matched ${name}`);
        } else {
            console.log(`No Match`);
        }
    }
}

findWords()


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+=2){
        arr.splice(i, 1, "even index");
    }
    console.log(arr);
}

replaceEvens(arr);


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Begin Codewars//

/*Problem #1
https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
Welcome! 

Your start-up's BA has told marketing that your website has a large audience in Scandinavia 
and surrounding countries. Marketing thinks it would be great to welcome visitors to the site 
in their own language. Luckily you already use an API that detects the user's location, 
so this is an easy win.

The Task

Think of a way to store the languages as a database (eg an object). 
The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), 
and returns a greeting - if you have it in your database. It should default to English 
if the language is not in the database, or in the event of an invalid input. */


//Database of greetings
const languages = {
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}

function welcome(language) {
    if (languages[language]) {
        return (languages[language]);
    } else {
        return (languages.english);
    }
}

console.log(welcome('123'));
console.log(welcome('spanish'));
console.log(welcome('estonian'));


/* Problem #2:
String repeat
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

Write a function that accepts an integer n and a string s as parameters, and returns a 
string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

//repeats the string s (n) number of times

function repeat_string(n, s) {
    return s.repeat(n);
}

//Basically a print(function(args)) in python
console.log(repeat_string(6, "I"));
console.log(repeat_string(8, "Hello"));


/* Problem #3
Beginner - Lost Without a Map
https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

//for i in arr, push(append) the value doubled at i in x 
//codewars didn't accept this so I had to google the map solution 
//which is probably what it was looking for to begin with

function maps(x) {
    let result = [];
    for (let i = 0; i < x.length; i++) {
        result.push(x[i] * 2);
    }
    return result;
}

console.log(maps([1, 2, 3]));


//map creates a new array by calling a function for every element in an array
//value => value * 2 (arrow function that means)
//return value * 2 

function maps(x) {
    return x.map(value => value * 2);
}

console.log(maps([1, 2, 3]));

/* Problem #4
String ends with?
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

Complete the solution so that it returns true if the first argument(string)
passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// I'm noticing that if you know the method in javascript you can solve basically 80% of the 8 and 7 kyus in 1 line
// https://www.w3schools.com/jsref/jsref_endswith.asp

function solution(str, ending) {
    return str.endsWith(ending);
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));



/* Problem 5
Delete occurrences of an element if it occurs more than n times
https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
Task

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/


function deleteNth(arr, n) {
    let occurence = {}; //empty dict for storing occurence of n
    let result = [];

    for (let num of arr) {
        if (occurence[num] === undefined) { // undefined means (if not in) in python
            occurence[num] = 0; // need to set to zero in order to add to dict, otherwise undefined + 1 = NaN
        }

        if (occurence[num] < n) { //if the value in key(num) is less than the n max frequency;
            result.push(num); //append to result list
            occurence[num]++; //increase the value of the key (num seem) by 1
        }
    }
    return result;
}


console.log(deleteNth([1, 2, 3, 1, 2], 2))