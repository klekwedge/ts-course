class User {
  skills: string[];


  addSkill(skill: string): void;
  addSkill(skills: string[]): void;

  addSkill(skillOrSkills: string[] | string): void {
    if (typeof skillOrSkills === 'string') {
      this.skills.push(skillOrSkills)
    }
    else {
      this.skills.concat(skillOrSkills)
    }
  }

}

const user = new User();
user.addSkill('FFF')
const user2 = new User();
const arr: string[] = ['a', 'b', 'c']
user2.addSkill(arr)

function run(distance: string): string
function run(distance: number): number

function run(distance: number | string): number | string {
  if (distance === 'number') {
    return 3;
  }
  else {
    return ''
  }
}

run(5);