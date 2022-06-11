"use strict";
class User {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
const user = new User();
user.addSkill('FFF');
const user2 = new User();
const arr = ['a', 'b', 'c'];
user2.addSkill(arr);
function run(distance) {
    if (distance === 'number') {
        return 3;
    }
    else {
        return '';
    }
}
run(5);
