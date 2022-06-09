let a = 5;
let b: string = a.toString();

let c = 'sdfs'
let d: number = parseInt(c);

let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

interface User {
  name: string,
  email: string,
  login: string
}

const user: User = {
  name: 'Alex',
  email: 'alex@gmail.com',
  login: 'alex123',
}

// const user = {
//   name: 'Alex',
//   email: 'alex@gmail.com',
//   login: 'alex123',
// } as User

// const user = <User>{
//   name: 'Alex',
//   email: 'alex@gmail.com',
//   login: 'alex123',
// }

interface Admin {
  name: string,
  role: number,
}

// const admin: Admin = {
//   ...user,
//   role: 1
// }

function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1
  }
}