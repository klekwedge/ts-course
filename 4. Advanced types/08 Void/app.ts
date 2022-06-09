function logId(id: string | number): void {
  console.log(id);
}

const a = logId(1);

function multiply(a: number, b?: number) {
  if (!b) {
    return a * a
  }
  return a * b
}

type voidFunc = () => void;

const f1: voidFunc = () => {

}


const f2: voidFunc = () => {
  return true
}

const result = f2();


const skills = ['Dev', 'Devops'];

const user = {
  s: ['s']
}

skills.forEach((skill) => user.s.push(skill))