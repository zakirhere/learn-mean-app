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
var user = new Student("Jane", "Message");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=app.js.map