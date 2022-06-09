type httpMethod = 'post' | 'get'

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
  return 1;
}

fetchWithAuth('s', 'post')

let method = 'post'
fetchWithAuth('s', method as 'post')


type User = {
  name: string,
  age: number,
  skills: string[]
}

type Role = {
  name: string,
  id: number
}

type UserWithRole = User & Role;

// type UserWithRole = {
//   user: User,
//   role: Role
// }

let user: UserWithRole = {
  name: 'John',
  age: 30,
  skills: ['1', '2'],
  id: 1
}