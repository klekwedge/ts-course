"use strict";
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
// const res = new Resp<string, number>('data', 0)
const res = new Resp('data', 0);
