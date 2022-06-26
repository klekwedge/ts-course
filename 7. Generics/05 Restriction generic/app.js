"use strict";
class Venicle {
}
function kmToMiles(venicle) {
    if (venicle.run) {
        venicle.run = venicle.run / 0.62;
    }
    return venicle;
}
class LCV extends Venicle {
}
const venicle = kmToMiles(new Venicle());
const lcv = kmToMiles(new LCV());
// kmToMiles({ a: 1 }) error
kmToMiles({ run: 1 });
function kmToMiles2(venicle) {
    if (venicle.run) {
        venicle.run = venicle.run / 0.62;
    }
    return venicle;
}
kmToMiles({ run: 1 });
function kmToMiles3(venicle) {
    if (venicle.run) {
        venicle.run = venicle.run / 0.62;
    }
    return venicle;
}
kmToMiles({ run: 1 });
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// function logId<T extends string | number>(id: T): T {
//   console.log(id);
//   return id;
// }
function logId(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
