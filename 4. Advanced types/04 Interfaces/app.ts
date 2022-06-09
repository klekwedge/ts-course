interface User {
  name: string,
  age: number,
  skills: string[]

  log: (id: number) => string
}

interface Role {
  roleId: number
}

interface UserWithRole extends User, Role {
  createdAt: Date
}

type User2 = {
  name: string,
  age: number,
  skills: string[]

  log: (id: number) => string
}

let user: UserWithRole = {
  name: 'John',
  age: 30,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date(),
  log(id) {
    return 'Example'
  }
}


interface UserDic {
  [index: number]: User
}

type UserDic2 = {
  [index: number]: User
}

// type UserDic3 = Record<number, User>