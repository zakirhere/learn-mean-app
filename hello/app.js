"use strict";
var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = "Full name is " + firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName;
}
function checkInclude() {
    var env = 'pdit.onboarding';
    var lowerEnvironments = ['dit', 'fit', 'localhost'];
    // return (_.includes(env , 'pdit.') || _.includes(env, lowerEnvironments));
    if (env.match(/^pdit\./)) {
        return true;
    }
}
var user = new Student("Jane", "Message");
console.log(checkInclude());
// document.body.innerHTML = greeter(user); 
//# sourceMappingURL=app.js.map