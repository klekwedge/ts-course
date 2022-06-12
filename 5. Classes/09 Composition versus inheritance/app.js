"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const users = new Users();
users.push(new User('Alex'));
users.push(new User('John'));
console.log(users.toString());
class UserList {
    push(u) {
        this.users.push(u);
    }
}
class Payment {
}
class UserWithPayment extends Payment {
}
class UserWithPayment2 {
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
