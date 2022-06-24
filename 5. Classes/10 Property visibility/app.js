"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Venicle_price;
class Venicle {
    constructor() {
        _Venicle_price.set(this, void 0);
        // private addDamage(damage: string) {
        //   this.damages.push(damage)
        // }
    }
    set model(m) {
        this._model = m;
        __classPrivateFieldSet(this, _Venicle_price, 100, "f");
    }
    get model() {
        return this._model;
    }
    isPriceEqual(v) {
        return __classPrivateFieldGet(this, _Venicle_price, "f") === __classPrivateFieldGet(v, _Venicle_price, "f");
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Venicle_price = new WeakMap();
class EuroTruck extends Venicle {
    setDamage(damage) {
        // this.damage error
        // this.#price error
    }
    setRun(km) {
        this.run = km / 0.62;
    }
}
new Venicle;
new EuroTruck;
