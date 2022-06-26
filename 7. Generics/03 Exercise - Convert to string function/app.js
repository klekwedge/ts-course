"use strict";
function toString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(typeof (toString(1)));
console.log(typeof (toString({ a: 5, b: 6 })));
console.log(typeof (toString('ffff')));
console.log(typeof (toString(121232121231221231213)));
console.log(typeof (toString(true)));
console.log(typeof (toString(false)));
