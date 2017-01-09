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

var user = new Student("Jane", "Message");

document.body.innerHTML = greeter(user);