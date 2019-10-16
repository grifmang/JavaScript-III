/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit - found inside the object scope.
* 2. Explicit - found outside of the object. Call, apply or bind is used when invoking function
* 3. New Binding - found outside of the function using this. You construct a new object with the 'new' keyword and pass it to the function with this in it.
* 4. Windows Brinding - If this doesn't fall in to one of the other 3 principles, it bind to the window. Unless in strict mode, then it's undefined.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Implicit Binding
const person = {
    name: 'Tim',
    gender: 'Male',
    shout: function() {
        console.log(`Hi there. I'm ${this.name} and I'm a ${this.gender}`);
    }
}
person.shout();

// Principle 2
// code example for Explicit Binding
function person2() {
    console.log(`${this.name} is a ${this.gender}`);
}

let myPerson = {
    name: 'Tim',
    gender: 'Male'
}

nameGender = person2.bind(myPerson);
nameGender();

// Principle 3
// code example for New Binding
function Person3(saying) {
    this.stuffToSay = saying;
}

let myPerson3 = new Person3('I like to Javascript 👻');
console.log(myPerson3.stuffToSay);

// Principle 4
// code example for Window Binding
function person4() {
    console.log(this.halloween);
}

var halloween = 'Spooky 👻';
person4();