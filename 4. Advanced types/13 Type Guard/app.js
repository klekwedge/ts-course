"use strict";
const user = {
    name: 'Alex',
    email: 'alex@gmail.com',
    login: 'alex123',
};
function logId(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isString(x) {
    return typeof x === 'string';
}
function logIdAlt(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlt(user) {
    return user.role !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('Пользовать не админ');
    }
}
