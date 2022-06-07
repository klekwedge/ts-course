"use strict";
function getFullName(userObj) {
    return `${userObj.firstname} ${userObj.surname}`;
}
const user = {
    firstname: 'John',
    surname: 'Smith',
    city: 'NY',
    age: 25,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName(user));
