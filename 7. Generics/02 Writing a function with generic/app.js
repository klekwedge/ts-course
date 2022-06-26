"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res = logMiddleware(10);
const res2 = logMiddleware('10');
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
getSplitedHalf([1, 2, 3, 4]);
// const res = logMiddleware<number>(10)
// const res2 = logMiddleware<string>('10')
