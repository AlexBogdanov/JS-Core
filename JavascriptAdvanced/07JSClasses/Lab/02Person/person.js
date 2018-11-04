class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName || null;
        this.lastName = lastName || null;
        this.age = age || null;
        this.email = email || null;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

module.exports = Person;