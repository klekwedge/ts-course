"use strict";
// interface User2 {
//   login: string,
//   password: string | undefined
// }
const user = {
    login: 'a@a.com',
    password: '1'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5);
function multiply2(first, second = 5) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply2(10);
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    const a = user.password.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
