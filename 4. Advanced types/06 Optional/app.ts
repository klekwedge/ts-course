interface User {
  login: string,
  password?: string
}

// interface User2 {
//   login: string,
//   password: string | undefined
// }

const user: User = {
  login: 'a@a.com',
  password: '1'
}


function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}

multiply(5)

function multiply2(first: number, second: number = 5): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}

multiply2(10)

interface UserPro {
  login: string,
  password?: {
    type: 'primary' | 'secondary'
  }
}

function testPass(user: UserPro){
  const t = user.password?.type;
  const a = user.password!.type;
}

function test(param?: string){
  const t = param ?? multiply(5)
}