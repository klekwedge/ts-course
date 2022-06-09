"use strict";
function logId(id) {
    console.log(id);
}
const a = logId(1);
function multiply(a, b) {
    if (!b) {
        return a * a;
    }
    return a * b;
}
const f1 = () => {
};
const f2 = () => {
    return true;
};
const result = f2();
const skills = ['Dev', 'Devops'];
const user = {
    s: ['s']
};
skills.forEach((skill) => user.s.push(skill));
