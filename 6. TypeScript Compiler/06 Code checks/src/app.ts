class User {
  role?: 'admin' | 'user'
  constructor(public name: string) {

  }

  login(): void {

  }
}

function createUser(user: User) { // noUnusedParameters
  // noUnusedLocals
  const defaultUser = new User('Default')
  //exactOptionalPropertyTypes
  defaultUser.role = undefined

  // noFallthroughCasesInSwitch
  switch (user.role) {
    case 'admin':
      const a = 7
      return
    case 'user':
      return true
      // allowUnreachableCode
      const b = 7;
  }
}

// noUncheckedIndexedAccess
interface IChecks {
  [check: string]: boolean
}

const c: IChecks = {}
const d = c['drive'];

// noPropertyAccessFromIndexSignature
c.drive

class VipUser extends User {
  // noImplicitOverride
  override login(): void {

  }
}