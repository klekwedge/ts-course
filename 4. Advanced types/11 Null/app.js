"use strict";
const a = null;
const b = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Alex'
        };
    }
}
const user = getUser();
if (user) {
    const userName = user.name;
}
