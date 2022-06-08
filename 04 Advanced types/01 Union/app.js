"use strict";
function logId(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(error) {
    if (Array.isArray(error)) {
        console.log(error);
    }
    else {
        console.log(error);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        console.log(a);
    }
    else {
        console.log(a);
    }
}
// const a = 1;
// let b: 1 = 1;
// b = 2;
