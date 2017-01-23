import _ = require('lodash');

class Student {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = "Full name is " + firstName + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName;
}

function checkInclude() {
    var env = 'pdit.onboarding';
    var lowerEnvironments = ['dit', 'fit', 'localhost'];
    // return (_.includes(env , 'pdit.') || _.includes(env, lowerEnvironments));
    if(env.match(/^pdit\./)) { return true }
}

var user = new Student("Jane", "Message");
console.log(checkInclude());
// document.body.innerHTML = greeter(user);