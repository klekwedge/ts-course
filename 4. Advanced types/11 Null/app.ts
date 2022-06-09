const a: unknown = null;
const b: any = null;
// const c: any = number;
// const d: any = string;
// const e: any = boolean;

interface User {
  name: string
}

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  }
  else {
    return {
      name: 'Alex'
    } as User
  }
}

const user = getUser();
if (user) {
  const userName = user.name;
}