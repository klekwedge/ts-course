interface User {
  name: string,
}

interface User {
  age: number,
}

// type User2 = {
//   name: string,
// }

// type User2 = {
//   age: number,
// }

const user: User = {
  name: 'John',
  age: 30
}


type ID = string | number;

// interface IDI = string | number;
interface IDI {
  ID: string | number
}