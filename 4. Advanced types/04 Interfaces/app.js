"use strict";
let user = {
    name: 'John',
    age: 30,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log(id) {
        return 'Example';
    }
};
// type UserDic3 = Record<number, User>
