"use strict";
class Logger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.log(...args);
    }
}
class User {
    delete() {
        throw new Error('Method not implemented.');
    }
    pay(paymentId) {
        console.log('Pay function');
    }
}
