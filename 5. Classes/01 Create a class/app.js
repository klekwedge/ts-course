"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Alex');
console.log(user);
user.name = 'John';
console.log(user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
