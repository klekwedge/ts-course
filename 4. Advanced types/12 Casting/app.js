"use strict";
let a = 5;
let b = a.toString();
let c = 'sdfs';
let d = parseInt(c);
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();
const user = {
    name: 'Alex',
    email: 'alex@gmail.com',
    login: 'alex123',
};
// const admin: Admin = {
//   ...user,
//   role: 1
// }
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1
    };
}
